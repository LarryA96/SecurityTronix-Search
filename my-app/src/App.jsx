import { useState } from "react";
import db from "./database.jsx";
import "./App.css";

function App() {
  // db is currently an array containing an array of cameras
  const data = db.flat();

  const [searchTerm, setSearchTerm] = useState("");
  const [overlay, setOverlay] = useState(false);

  const [filters, setFilters] = useState({
    megapixels: [],
    features: [],
    formFactor: [],
  });

  const [results, setResults] = useState([]);

  /*
   * Filter definitions
   */
  const megapixelFilters = [
    { label: "2 Megapixels", value: "2" },
    { label: "2.8 Megapixels", value: "2.8" },
    { label: "4 Megapixels", value: "4" },
    { label: "5 Megapixels", value: "5" },
    { label: "6 Megapixels", value: "6" },
    { label: "8 Megapixels", value: "8" },
    { label: "12 Megapixels", value: "12" },
  ];

  const featureFilters = [
    { label: "Two-way Audio", value: "twoWay" },
    { label: "Built-in Microphone", value: "mic" },
    { label: "Built-in Speaker", value: "speaker" },
    { label: "Color Night Vision", value: "cnv" },
    { label: "Motorized Zoom", value: "mz" },
    { label: "License Plate Recognition", value: "lpr" },
  ];

  const formFactorFilters = [
    { label: "Dome", value: "dome" },
    { label: "Bullet", value: "bullet" },
    { label: "Fixed Turret Dome", value: "turretDome" },
    { label: "PTZ", value: "ptz" },
  ];

  /*
   * Handle an individual checkbox
   */
  const handleFilterChange = (category, value) => {
    setFilters((currentFilters) => {
      const currentValues = currentFilters[category];

      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...currentFilters,
        [category]: newValues,
      };
    });
  };

  /*
   * Apply the currently checked filters.
   *
   * Multiple selections within the same category use OR.
   *
   * Example:
   * 4MP + 8MP
   * means cameras can be either 4MP OR 8MP.
   *
   * Different categories use AND.
   *
   * Example:
   * 4MP + Dome + CNV
   * means:
   * 4MP AND Dome AND CNV.
   */
  const handleFilter = () => {
    setOverlay(false);

    const filteredData = data.filter((camera) => {
      // -------------------------
      // Megapixels
      // -------------------------

      const matchesMegapixels =
        filters.megapixels.length === 0 ||
        filters.megapixels.includes(camera.megapixels);

      // -------------------------
      // Features
      // -------------------------

      const matchesFeatures =
        filters.features.length === 0 ||
        filters.features.every((feature) => camera[feature] === true);

      // -------------------------
      // Form Factor
      // -------------------------

      const matchesFormFactor =
        filters.formFactor.length === 0 ||
        filters.formFactor.some((formFactor) => camera[formFactor] === true);

      return matchesMegapixels && matchesFeatures && matchesFormFactor;
    });

    setResults(filteredData);
  };

  /*
   * Search the database.
   *
   * The search is intentionally loose:
   *
   * "IP4"
   * will match:
   * ST-IP4FB
   * ST-IP4FD
   * ST-IP4PTZ-4X
   * etc.
   *
   * Search is performed against the camera name.
   *
   * The current filters are also applied.
   */
  const handleSearch = () => {
    const search = searchTerm.trim().toLowerCase();

    const searchedData = data.filter((camera) => {
      // -------------------------
      // Search
      // -------------------------

      const matchesSearch =
        search === "" || camera.camera.toLowerCase().includes(search);

      // -------------------------
      // Megapixels
      // -------------------------

      const matchesMegapixels =
        filters.megapixels.length === 0 ||
        filters.megapixels.includes(camera.megapixels);

      // -------------------------
      // Features
      // -------------------------

      const matchesFeatures =
        filters.features.length === 0 ||
        filters.features.every((feature) => camera[feature] === true);

      // -------------------------
      // Form Factor
      // -------------------------

      const matchesFormFactor =
        filters.formFactor.length === 0 ||
        filters.formFactor.some((formFactor) => camera[formFactor] === true);

      return (
        matchesSearch &&
        matchesMegapixels &&
        matchesFeatures &&
        matchesFormFactor
      );
    });

    setResults(searchedData);
  };

  /*
   * Clear search and filters
   */
  const handleClear = () => {
    setSearchTerm("");

    setFilters({
      megapixels: [],
      features: [],
      formFactor: [],
    });

    setResults([]);
    setOverlay(false);
  };

  /*
   * Determine whether anything has been selected.
   */
  const hasFilters =
    filters.megapixels.length > 0 ||
    filters.features.length > 0 ||
    filters.formFactor.length > 0;

  /*
   * Display feature information on the result card.
   */
  const featureResults = [
    {
      label: "Two-way Audio",
      property: "twoWay",
    },
    {
      label: "Built-in Microphone",
      property: "mic",
    },
    {
      label: "Built-in Speaker",
      property: "speaker",
    },
    {
      label: "Color Night Vision",
      property: "cnv",
    },
    {
      label: "Motorized Zoom",
      property: "mz",
    },
    {
      label: "License Plate Recognition",
      property: "lpr",
    },
  ];

  return (
    <div className="window">
      <h1>Camera Lookup</h1>

      <div className="searchWindow">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          {/* =========================
              SEARCH
              ========================= */}

          <input
            type="text"
            placeholder="Search cameras..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* =========================
              FILTER BUTTON
              ========================= */}

          <button type="button" onClick={() => setOverlay(true)}>
            Filter
          </button>

          {/* =========================
              FILTER OVERLAY
              ========================= */}

          {overlay && (
            <div className="overlay">
              <div className="overlayContent">
                <button
                  type="button"
                  className="closeButton"
                  onClick={() => setOverlay(false)}
                >
                  X
                </button>

                {/* =========================
                    MEGAPIXELS
                    ========================= */}

                <div className="filterSection">
                  <h2>Megapixels</h2>

                  {megapixelFilters.map((filter) => (
                    <div className="filterOption" key={filter.value}>
                      <input
                        type="checkbox"
                        id={`megapixel-${filter.value}`}
                        checked={filters.megapixels.includes(filter.value)}
                        onChange={() =>
                          handleFilterChange("megapixels", filter.value)
                        }
                      />

                      <label htmlFor={`megapixel-${filter.value}`}>
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* =========================
                    FEATURES
                    ========================= */}

                <div className="filterSection">
                  <h2>Features</h2>

                  {featureFilters.map((filter) => (
                    <div className="filterOption" key={filter.value}>
                      <input
                        type="checkbox"
                        id={`feature-${filter.value}`}
                        checked={filters.features.includes(filter.value)}
                        onChange={() =>
                          handleFilterChange("features", filter.value)
                        }
                      />

                      <label htmlFor={`feature-${filter.value}`}>
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* =========================
                    FORM FACTOR
                    ========================= */}

                <div className="filterSection">
                  <h2>Form Factor</h2>

                  {formFactorFilters.map((filter) => (
                    <div className="filterOption" key={filter.value}>
                      <input
                        type="checkbox"
                        id={`form-${filter.value}`}
                        checked={filters.formFactor.includes(filter.value)}
                        onChange={() =>
                          handleFilterChange("formFactor", filter.value)
                        }
                      />

                      <label htmlFor={`form-${filter.value}`}>
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* =========================
                    APPLY FILTERS
                    ========================= */}

                <button type="button" onClick={handleFilter}>
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* =========================
              SEARCH BUTTON
              ========================= */}

          <button type="submit" disabled={!searchTerm.trim() && !hasFilters}>
            Search
          </button>

          {/* =========================
              CLEAR BUTTON
              ========================= */}

          <button
            type="button"
            onClick={handleClear}
            disabled={!results.length}
          >
            Clear Results
          </button>
        </form>
      </div>

      {/* =========================
          RESULTS
          ========================= */}

      {results.length > 0 && (
        <div className="results">
          <p className="disclaimer">
            *Note that only models with a built-in mic & speaker combo are
            considered Two-Way compatible here
          </p>
          {results.map((result) => (
            <div className="resultCard" key={result.camera}>
              {/* =========================
                  CAMERA NAME
                  ========================= */}

              <h3>{result.camera}</h3>

              <div className="resultContent">
                {/* =========================
                    FEATURES
                    ========================= */}

                <div className="resultFeatures">
                  <p>
                    <strong>Megapixels:</strong> {result.megapixels}
                  </p>

                  {featureResults.map(
                    (feature) =>
                      result[feature.property] !== false &&
                      result[feature.property] !== null &&
                      result[feature.property] !== undefined &&
                      result[feature.property] !== "" && (
                        <p key={feature.property}>
                          <strong>{feature.label}:</strong> Yes
                        </p>
                      ),
                  )}

                  <p>
                    <strong>Form Factor:</strong>{" "}
                    {result.dome
                      ? "Dome"
                      : result.bullet
                        ? "Bullet"
                        : result.turretDome
                          ? "Fixed Turret Dome"
                          : result.ptz
                            ? "PTZ"
                            : "Fisheye"}
                  </p>
                </div>

                {/* =========================
                    MOUNTS
                    ========================= */}

                <div className="resultMounts">
                  <h4>Compatible Mounts</h4>

                  <ul>
                    {result.mounts.map((mount, index) => (
                      <li key={index}>{mount}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================
          NO RESULTS
          ========================= */}

      {results.length === 0 && (searchTerm || hasFilters) && (
        <div className="noResults">
          <p>No cameras found.</p>
        </div>
      )}
    </div>
  );
}

export default App;
