const Doctors = () => {
  const doctorsList = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Sarah", specialty: "Pediatrics" },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Available Doctors</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {doctorsList.map(doc => (
          <li key={doc.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{doc.name}</strong> - {doc.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;