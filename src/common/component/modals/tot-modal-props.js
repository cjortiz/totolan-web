export const bodyStyleModal = (props) => {
    const { height, hasPaddingTop } = props;
    return {
        height: height ? height : "calc(105vh - 200px)",
        overflowY: "auto",
        paddingTop: hasPaddingTop ? "50px" : "",
    };
};
