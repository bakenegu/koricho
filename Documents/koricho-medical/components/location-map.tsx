"use client"

export function LocationMap() {
  // Addis Ababa coordinates
  const latitude = 9.005401
  const longitude = 38.763611

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border-2 border-border">
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.05},${latitude - 0.05},${longitude + 0.05},${latitude + 0.05}&layer=mapnik&marker=${latitude},${longitude}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        title="Koricho Location Map"
      />
    </div>
  )
}
