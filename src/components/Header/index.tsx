import BlockLink from "../BlockLink";
import Button from "../Button";
import Container from "../Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <BlockLink height="32px" href="/">
          <svg
            width="630"
            height="167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 630 167"
            className={styles.logo}
          >
            <path
              d="m75.5 32.762 43.058 25.37v50.737L75.5 134.238l-43.058-25.369V58.131L75.5 32.762Z"
              stroke="#fff"
              strokeWidth="8"
            />
            <path
              d="m75.5 5 65.385 39.25v78.5L75.5 162l-65.385-39.25v-78.5L75.5 5Z"
              stroke="#fff"
              strokeWidth="8"
            />
            <path
              d="M79.5 77.291V35.448l34.745 20.174L79.5 77.292Z"
              stroke="#fff"
              strokeWidth="8"
            />
            <path
              d="M75.5 139V63l8 3v68l-8 5Zm160.048-21V46.6h23.46c5.576 0 10.166.918 13.77 2.754 3.604 1.836 6.256 4.318 7.956 7.446 1.768 3.128 2.652 6.664 2.652 10.608 0 3.876-.85 7.378-2.55 10.506-1.7 3.128-4.352 5.644-7.956 7.548-3.604 1.836-8.228 2.754-13.872 2.754h-14.892V118h-8.568Zm8.568-37.026h14.688c5.712 0 9.758-1.19 12.138-3.57 2.448-2.448 3.672-5.78 3.672-9.996 0-4.284-1.224-7.616-3.672-9.996-2.38-2.448-6.426-3.672-12.138-3.672h-14.688v27.234Zm64.43 38.25c-4.216 0-7.718-.714-10.506-2.142-2.788-1.428-4.862-3.332-6.222-5.712-1.36-2.38-2.04-4.964-2.04-7.752 0-5.168 1.972-9.146 5.916-11.934 3.944-2.788 9.316-4.182 16.116-4.182h13.668v-.612c0-4.42-1.156-7.752-3.468-9.996-2.312-2.312-5.406-3.468-9.282-3.468-3.332 0-6.222.85-8.67 2.55-2.38 1.632-3.876 4.046-4.488 7.242h-8.772c.34-3.672 1.564-6.766 3.672-9.282 2.176-2.516 4.862-4.42 8.058-5.712 3.196-1.36 6.596-2.04 10.2-2.04 7.072 0 12.376 1.904 15.912 5.712 3.604 3.74 5.406 8.738 5.406 14.994V118h-7.65l-.51-9.078c-1.428 2.856-3.536 5.304-6.324 7.344-2.72 1.972-6.392 2.958-11.016 2.958Zm1.326-7.242c3.264 0 6.052-.85 8.364-2.55 2.38-1.7 4.182-3.91 5.406-6.63a20.648 20.648 0 0 0 1.836-8.568v-.102h-12.954c-5.032 0-8.602.884-10.71 2.652-2.04 1.7-3.06 3.842-3.06 6.426 0 2.652.952 4.794 2.856 6.426 1.972 1.564 4.726 2.346 8.262 2.346ZM359.593 118l-19.176-50.592h8.976l15.198 42.33 15.3-42.33h8.772L369.487 118h-9.894Zm52.845 1.224c-4.216 0-7.718-.714-10.506-2.142-2.788-1.428-4.862-3.332-6.222-5.712-1.36-2.38-2.04-4.964-2.04-7.752 0-5.168 1.972-9.146 5.916-11.934 3.944-2.788 9.316-4.182 16.116-4.182h13.668v-.612c0-4.42-1.156-7.752-3.468-9.996-2.312-2.312-5.406-3.468-9.282-3.468-3.332 0-6.222.85-8.67 2.55-2.38 1.632-3.876 4.046-4.488 7.242h-8.772c.34-3.672 1.564-6.766 3.672-9.282 2.176-2.516 4.862-4.42 8.058-5.712 3.196-1.36 6.596-2.04 10.2-2.04 7.072 0 12.376 1.904 15.912 5.712 3.604 3.74 5.406 8.738 5.406 14.994V118h-7.65l-.51-9.078c-1.428 2.856-3.536 5.304-6.324 7.344-2.72 1.972-6.392 2.958-11.016 2.958Zm1.326-7.242c3.264 0 6.052-.85 8.364-2.55 2.38-1.7 4.182-3.91 5.406-6.63a20.648 20.648 0 0 0 1.836-8.568v-.102h-12.954c-5.032 0-8.602.884-10.71 2.652-2.04 1.7-3.06 3.842-3.06 6.426 0 2.652.952 4.794 2.856 6.426 1.972 1.564 4.726 2.346 8.262 2.346ZM450.792 118V67.408h7.752l.51 9.078c1.632-3.196 3.978-5.712 7.038-7.548 3.06-1.836 6.528-2.754 10.404-2.754 5.984 0 10.744 1.836 14.28 5.508 3.604 3.604 5.406 9.18 5.406 16.728V118h-8.568V89.338c0-10.54-4.352-15.81-13.056-15.81-4.352 0-7.99 1.598-10.914 4.794-2.856 3.128-4.284 7.616-4.284 13.464V118h-8.568Zm81.117 1.224c-4.828 0-9.112-1.088-12.852-3.264-3.74-2.244-6.698-5.338-8.874-9.282-2.108-3.944-3.162-8.602-3.162-13.974 0-5.304 1.054-9.928 3.162-13.872 2.108-4.012 5.032-7.106 8.772-9.282 3.808-2.244 8.194-3.366 13.158-3.366 4.896 0 9.112 1.122 12.648 3.366 3.604 2.176 6.358 5.066 8.262 8.67 1.904 3.604 2.856 7.48 2.856 11.628 0 .748-.034 1.496-.102 2.244v2.55h-40.29c.204 3.876 1.088 7.106 2.652 9.69 1.632 2.516 3.638 4.42 6.018 5.712 2.448 1.292 5.032 1.938 7.752 1.938 3.536 0 6.494-.816 8.874-2.448 2.38-1.632 4.114-3.842 5.202-6.63h8.466c-1.36 4.692-3.978 8.602-7.854 11.73-3.808 3.06-8.704 4.59-14.688 4.59Zm0-45.798c-4.08 0-7.718 1.258-10.914 3.774-3.128 2.448-4.93 6.052-5.406 10.812h31.824c-.204-4.556-1.768-8.126-4.692-10.71-2.924-2.584-6.528-3.876-10.812-3.876ZM567.235 118V44.56h8.568V118h-8.568Zm22.612 0V44.56h8.568V118h-8.568Zm27.813-61.812c-1.7 0-3.128-.544-4.284-1.632-1.088-1.156-1.632-2.584-1.632-4.284 0-1.632.544-2.992 1.632-4.08 1.156-1.088 2.584-1.632 4.284-1.632 1.632 0 3.026.544 4.182 1.632 1.156 1.088 1.734 2.448 1.734 4.08 0 1.7-.578 3.128-1.734 4.284-1.156 1.088-2.55 1.632-4.182 1.632ZM613.376 118V67.408h8.568V118h-8.568Z"
              fill="#fff"
            />
          </svg>
        </BlockLink>
        <ul className={styles.list}>
          <li>
            <BlockLink href="#">Projetos</BlockLink>
          </li>
          <li>
            <BlockLink href="#">Processos</BlockLink>
          </li>
          <li>
            <Button href="#" size="small">
              Contato
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
