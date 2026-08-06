import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="center-screen">
      <div className="signin-card">
        {/* Brand logo */}
        <div
          style={{
            width: 52, height: 52, borderRadius: 16,
            background: 'linear-gradient(135deg, var(--primary), var(--primary-2))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 22,
            boxShadow: '0 4px 16px rgba(91,91,214,.4)',
          }}
        >
          ◆
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>Claude Plans</div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 600, marginTop: 2 }}>
            Anthropic Internal Admin Portal
          </div>
        </div>

        <form action={login} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label className="field">
            <span>Username</span>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="admin"
              required
              autoComplete="username"
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </label>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
            Sign in
          </button>
        </form>

        <p style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600 }}>
          Default: admin / admin123
        </p>
      </div>
    </div>
  );
}