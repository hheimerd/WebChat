import {css} from 'styled-components';

export const styles = {
    row: css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    centredRow: css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `,

    column: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `,

    centredColumn: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,

    fluent: css`
      backdrop-filter: blur(3px);
    `,
};