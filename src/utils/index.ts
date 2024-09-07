export function base64Encode(plain: string) {
  return bytesToBase64(new TextEncoder().encode(plain));
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = String();
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

export function base64Decode(encrypted: string) {
  return new TextDecoder().decode(
    Uint8Array.from(atob(encrypted), (m) => m.charCodeAt(0)),
  );
}
