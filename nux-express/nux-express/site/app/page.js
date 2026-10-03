// The public site is the existing UI engine (public/app.js), unchanged, rendering into #app.
// Plain <a href> links (not next/link) are used elsewhere so this page always boots fresh.
export default function Home() {
  return <div id="app" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '' }} />;
}
