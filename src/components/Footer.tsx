import '../style/footer.scss';

export default function Footer() {
  return (
    <footer>
      <p>
        Small personal project, created with React Vite, TypeScript, Sass and
        Zustand.
      </p>
      <small>
        Made by{' '}
        <a href="https://akickia.se" target="_blank">
          akickia
        </a>{' '}
        fall of 2024
      </small>
      <br />
      <small>
        <a href="https://github.com/akickia/tick-tack-toe" target="_blank">
          Github repository{' '}
        </a>
      </small>
    </footer>
  );
}
