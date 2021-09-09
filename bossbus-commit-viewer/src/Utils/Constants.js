

export default class Constants {
    static subfolder = process.env.REACT_APP_SUBFOLDER;
    static apiBaseUrl = process.env.REACT_APP_API_BASEURL;
    static backgroundColorVariations = [
        "#3498DB",
        "#F1C40F",
        "#8E44AD",
        "#2C3E50",
        "#2ECC71",
        "#2980B9",
        "#F39C12",
    ];
    static defaultModalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            overflow: "visible",
            zIndex: 100
        },
    };

    static rightModalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "0px",
            bottom: "auto",
            marginRight: "0%",
            transform: "translate(-17%, -50%)",
            overflow: "visible",
            height: "100%",
            overflowY: "scroll",
            width: "60%",
            border: 0,
        },
    };

    static rightModalStyleMini = {
        content: {
            top: "50%",
            left: "50%",
            right: "0px",
            bottom: "auto",
            marginRight: "0%",
            transform: "translate(30%, -50%)",
            overflow: "visible",
            height: "100%",
            overflowY: "scroll",
            width: "40%",
            border: 0,
        },
    };

    static transparentModalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            overflow: "visible",
            border: "none",
            background: "transparent",
        },
    };

    static selectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "#495057",
            fontSize: "0.8125rem",
            fontWeight: "600",
            backgroundColor: state.isSelected ? "#83B739" : provided.backgroundColor,
        }),
        control: (provided, state) => {
            // none of react-select's styles are passed to <Control />
            //console.log(state);
            return {
                ...provided,
                borderColor:
                    state.isFocused || state.isSelected
                        ? "#83B739"
                        : provided.borderColor,
                "&:hover": {
                    borderColor:
                        state.isFocused || state.isSelected
                            ? "#83B739"
                            : provided.borderColor,
                },
            };
        },
        singleValue: (provided, state) => {
            return {
                ...provided,
                color: "#495057",
                fontSize: "0.8125rem",
                fontWeight: "600",
                borderColor:
                    state.isFocused || state.isSelected
                        ? "#83B739"
                        : provided.borderColor,
            };
        },
    };


}
