const URL_SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

function startsWithKnownScheme(value: string): boolean {
  return URL_SCHEME_PATTERN.test(value);
}

export function normalizeImageSrc(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (startsWithKnownScheme(trimmed)) {
    return trimmed;
  }

  const normalizedSlashes = trimmed.replaceAll("\\", "/");
  const withoutDotPrefix = normalizedSlashes.replace(/^\.\//, "");
  if (withoutDotPrefix.startsWith("/")) {
    return withoutDotPrefix;
  }

  if (withoutDotPrefix.startsWith("public/")) {
    return `/${withoutDotPrefix.slice("public/".length)}`;
  }

  return `/${withoutDotPrefix}`;
}

export function isRemoteImageSrc(value: string): boolean {
  const normalized = normalizeImageSrc(value);
  return (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://")
  );
}
