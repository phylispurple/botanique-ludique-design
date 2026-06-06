import { Navigate } from "react-router-dom";

// L'atelier Wardian Case du 6 juin 2026 a eu lieu : on redirige vers l'agenda.
const InscriptionTerrariumJuin = () => <Navigate to="/agenda" replace />;

export default InscriptionTerrariumJuin;
