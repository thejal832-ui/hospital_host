import { useState } from "react";

type Patient = {
  token: number;
  name: string;
};

type Doctor = {
  id: number;
  name: string;
  time: string;
  days: string;
};

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Krish", time: "9:00 AM - 1:00 PM", days: "Monday, Wednesday, Friday" },
  { id: 2, name: "Dr. Clara", time: "2:00 PM - 6:00 PM", days: "Tuesday, Thursday" },
  { id: 3, name: "Dr. Stephy", time: "10:00 AM - 4:00 PM", days: "Monday - Saturday" },
  { id: 4, name: "Dr. John", time: "10:00 AM - 4:00 PM", days: "Monday - Saturday" },
  { id: 5, name: "Dr. Mathew", time: "10:00 AM - 1:00 PM", days: "Monday - Saturday" },
];

// Dummy queue data per doctor (in a real app this would come from a shared state or backend)
const dummyQueues: Record<number, Patient[]> = {
  1: [{ token: 1, name: "Arun Kumar" }, { token: 2, name: "Sita Devi" }, { token: 3, name: "Ravi Nair" }],
  2: [{ token: 1, name: "Meena P" }],
  3: [],
  4: [{ token: 1, name: "John Alex" }, { token: 2, name: "Priya S" }],
  5: [{ token: 1, name: "Anjali R" }, { token: 2, name: "Tom Jose" }, { token: 3, name: "Nisha K" }, { token: 4, name: "Biju M" }],
};

function AllDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const queue = selectedDoctor ? dummyQueues[selectedDoctor.id] : [];

  return (
    <div style={styles.container}>
      {/* Queue Modal */}
      {selectedDoctor && (
        <div style={styles.overlay} onClick={() => setSelectedDoctor(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                <h3 style={styles.modalTitle}>{selectedDoctor.name}</h3>
                <p style={styles.modalSub}> {selectedDoctor.time} &nbsp;|&nbsp;  {selectedDoctor.days}</p>
              </div>
              <button style={styles.closeBtn} onClick={() => setSelectedDoctor(null)}>✕</button>
            </div>

            <div style={styles.queueCount}>
              <span style={styles.countBadge}>{queue.length}</span>
              <span style={styles.countLabel}>patients waiting</span>
            </div>

            {queue.length === 0 ? (
              <div style={styles.emptyQueue}>
                <p style={{ fontSize: "2rem" }}></p>
                <p style={{ color: "#64748b", marginTop: "8px" }}>No patients in queue right now</p>
              </div>
            ) : (
              <ul style={styles.queueList}>
                {queue.map((patient) => (
                  <li key={patient.token} style={styles.queueItem}>
                    <span style={{
                      ...styles.tokenBadge,
                      background: patient.token === 1 ? "#5bffce" : "#e8edff",
                      color: patient.token === 1 ? "white" : "#5bffad",
                    }}>
                      #{patient.token}
                    </span>
                    <span style={styles.patientName}>{patient.name}</span>
                    {patient.token === 1 && (
                      <span style={styles.nowBadge}>Now Consulting</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Main Table */}
      <div style={styles.card}>
        <h2 style={styles.title}>All Doctors</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Doctor Name</th>
                <th style={styles.th}>Visiting Time</th>
                <th style={styles.th}>Available Days</th>
                <th style={styles.th}>Queue</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
                <tr key={doc.id} style={index % 2 === 0 ? {} : styles.alternateRow}>
                  <td style={styles.td}>{doc.name}</td>
                  <td style={styles.td}>{doc.time}</td>
                  <td style={styles.td}>{doc.days}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.viewBtn}
                      onClick={() => setSelectedDoctor(doc)}
                      onMouseEnter={(e) => {
                        (e.target as HTMLButtonElement).style.background = "#4a5ae8";
                        (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLButtonElement).style.background = "#5b6cff";
                        (e.target as HTMLButtonElement).style.transform = "scale(1)";
                      }}
                    >
                      View Queue ({dummyQueues[doc.id].length})
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f0f4ff",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    padding: "40px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    height: "fit-content",
  },
  title: {
    fontSize: "2rem",
    color: "#1e293b",
    marginBottom: "30px",
    textAlign: "center",
    fontWeight: "700",
  },
  tableContainer: { overflowX: "auto" },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0",
    borderRadius: "8px",
    overflow: "hidden",
  },
  headerRow: { backgroundColor: "rgba(91, 108, 255, 0.1)" },
  th: {
    padding: "16px",
    textAlign: "left",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#030907",
    borderBottom: "2px solid rgba(91, 108, 255, 0.2)",
  },
  td: {
    padding: "16px",
    fontSize: "0.95rem",
    color: "#475569",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    verticalAlign: "middle",
  },
  alternateRow: { backgroundColor: "rgba(0,0,0,0.02)" },
  viewBtn: {
    background: "#457443",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    transition: "all 0.2s",
    width: "auto",
  },
  // Modal styles
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  },
  modal: {
    background: "white",
    borderRadius: "20px",
    padding: "32px",
    width: "100%",
    maxWidth: "460px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
  },
  modalTitle: {
    fontSize: "1.4rem",
    color: "#1e293b",
    fontWeight: "700",
    margin: 0,
  },
  modalSub: {
    fontSize: "13px",
    color: "#64748b",
    marginTop: "4px",
  },
  closeBtn: {
    background: "#f1f5f9",
    border: "none",
    borderRadius: "8px",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    fontSize: "16px",
    color: "#64748b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  queueCount: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    padding: "12px 16px",
    background: "#f8faff",
    borderRadius: "10px",
    border: "1px solid rgba(91,108,255,0.15)",
  },
  countBadge: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#5b6cff",
  },
  countLabel: {
    fontSize: "14px",
    color: "#64748b",
  },
  emptyQueue: {
    textAlign: "center",
    padding: "32px",
  },
  queueList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  queueItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    background: "#f8faff",
    borderRadius: "10px",
    border: "1px solid rgba(91,108,255,0.08)",
  },
  tokenBadge: {
    padding: "4px 10px",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "13px",
    minWidth: "36px",
    textAlign: "center",
  },
  patientName: {
    flex: 1,
    fontSize: "15px",
    color: "#1e293b",
    fontWeight: "500",
  },
  nowBadge: {
    background: "#dcfce7",
    color: "#16a34a",
    fontSize: "11px",
    padding: "3px 8px",
    borderRadius: "20px",
    fontWeight: "600",
  },
};


export default AllDoctors;