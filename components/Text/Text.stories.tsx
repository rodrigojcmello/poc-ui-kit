import React from 'react';
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
// import { action } from "@storybook/addon-actions";
import Button from "./index";

const stories = storiesOf("Components", module);

stories.add(
    "Text kk",
    withInfo({ inline: true })(() => (
        <Button>Hello Button</Button>
    )),
);

// export default { title: 'Button' };
//
// export const withText = () => <Button>Hello Button</Button>;
//
// export const withEmoji = () => (
//     <Button>
//         <span role="img" aria-label="so cool">
//           😀 😎 👍 💯
//         </span>
//         ué
//     </Button>
// )
