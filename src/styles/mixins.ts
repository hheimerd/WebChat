import {css} from 'styled-components';

export const styles = {
    row: css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    column: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `,

    fluent: css`
      backdrop-filter: blur(3px);
    `,
};