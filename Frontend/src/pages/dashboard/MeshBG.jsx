export default function MeshBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* PURPLE */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "42vw",
          height: "42vw",
          minWidth: 320,
          minHeight: 320,
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* CYAN */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "36vw",
          height: "36vw",
          minWidth: 280,
          minHeight: 280,
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* GREEN */}
      <div
        style={{
          position: "absolute",
          bottom: "-12%",
          left: "25%",
          width: "30vw",
          height: "30vw",
          minWidth: 240,
          minHeight: 240,
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}