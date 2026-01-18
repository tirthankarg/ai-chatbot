export default function ConnectionStatus({ status }) {
  return (
    <div className={`connection-status ${status}`}>
      Status: {status}
    </div>
  );
}
