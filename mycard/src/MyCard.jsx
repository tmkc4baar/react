function MyCard({ name, team, image, role }) {
  return (
    <div style={{
      border: "2px solid #646cff",
      borderRadius: "12px",
      padding: "16px",
      textAlign: "center",
      width: "250px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "12px" }}
      />
      <h2>{name}</h2>
      <p><strong>Team:</strong> {team}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default MyCard;