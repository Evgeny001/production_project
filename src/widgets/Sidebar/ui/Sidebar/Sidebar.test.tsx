import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';

describe('Sidebar', () => {
    test('should render correctly', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        render(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
