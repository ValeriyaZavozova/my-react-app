export const BackendCommunication = () => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  if (!backendUrl) {
    return <p>No backend url provided</p>
  }

  return (
    <p>Backend url: {backendUrl}</p>
  );
}