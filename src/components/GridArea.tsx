import type {ReactElement} from 'react';

export function GridArea({children, area}: { children: ReactElement, area: string }) {
    return (
        <div style={{gridArea: area}}>
            {children}
        </div>
    );
}