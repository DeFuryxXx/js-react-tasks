import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
render() {
    return (
      <ThemeContext.Consumer>
        {({ themes, theme, setTheme }) => (
          <ButtonGroup className="mb-2">
            {themes.map((item) => (
              <ToggleButton
                key={item.id}
                id={`theme-${item.id}`}
                type="radio"
                variant="secondary"
                name="theme"
                value={item.id}
                checked={theme.id === item.id}
                onChange={() => setTheme(item)}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        )}
      </ThemeContext.Consumer>
    );
  }
  // END
}

export default ThemeSwitcher;
