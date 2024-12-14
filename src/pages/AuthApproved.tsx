export function AuthApproved() {
  return (
    <div>
      <h1>Approved</h1>
      <button type="button" onClick={() => window.location.href = '/'}>Go to Home Page</button>
    </div>
  )
}