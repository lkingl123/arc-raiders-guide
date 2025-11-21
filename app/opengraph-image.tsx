import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Arc Raiders Item Guide - 275+ Items Database';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '30px',
            }}
          >
            AR
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
            }}
          >
            Arc Raiders
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Item Guide
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            textAlign: 'center',
          }}
        >
          Should you sell, recycle, or save?
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#64748b',
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: '8px 20px',
              background: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '999px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            275+ Items
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
