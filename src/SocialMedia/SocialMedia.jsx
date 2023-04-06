import { ReactComponent as LinkedinLogo } from "/Users/db/animelist/anime/src/assets/images/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "/Users/db/animelist/anime/src/assets/images/logo-github.svg";

export const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/andrew-lee-0b0b1b1b9/"> 
            <LinkedinLogo />
            </a>
        < a href="https://github.com/muricapham">
            <GithubLogo />
        </a>
        </div>
    );
};