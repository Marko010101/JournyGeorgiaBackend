const locationsData = JSON.parse(
  document.getElementById("map").dataset.locations,
);

// Map initialization
const map = new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
  center: locationsData[0].coordinates, // Initial center
  // scrollZoom: false,
  // zoom: 6,
});

// Create a bounds object to include all locations
const bounds = new maplibregl.LngLatBounds();

// Loop through each location and add a marker
locationsData.forEach((location) => {
  // Create a new HTML element for the marker
  const el = document.createElement("div");
  el.className = "marker";

  // Create a marker and add it to the map
  new maplibregl.Marker(el)
    .setLngLat(location.coordinates)
    .setPopup(
      new maplibregl.Popup({ offset: 25 })
        .setMaxWidth("25rem")
        .setHTML(
          `<div class='maplibregl-popup-content'><h4>${location.description}</h4><p>Day: ${location.day}</p></div>`,
        ),
    )
    .addTo(map);

  // Extend the bounds to include this marker
  bounds.extend(location.coordinates);
});

// Fit the map to the bounds with animation
map.fitBounds(bounds, {
  padding: { top: 100, bottom: 100, left: 100, right: 100 }, // Add padding to the view
  maxZoom: 10, // Prevent zooming in too close
  duration: 1000, // Animation duration in milliseconds
});
