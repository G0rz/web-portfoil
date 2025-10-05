import {heroui} from "@heroui/react";
import {darkTheme, lightTheme} from "./themes";

export default heroui({
    themes: {
        "light": lightTheme,
        "dark": darkTheme,
    },
});
