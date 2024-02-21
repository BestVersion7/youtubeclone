type props = {
    icon: React.ReactNode;
    iconTitle: string;
    text: string;
};

export const VideoIcons = (props: props) => {
    return (
        <div>
            <button
                type="button"
                title={props.iconTitle}
                className="shorts-icon text-2xl"
            >
                {props.icon}
            </button>
            <br />
            <span className="tracking-wide">{props.text}</span>
        </div>
    );
};
