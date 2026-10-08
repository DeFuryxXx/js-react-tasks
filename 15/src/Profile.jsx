import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  // BEGIN (write your solution here)
render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => <article className={theme.className}>{content}</article>}
      </ThemeContext.Consumer>
    );
  }
  // END
}

export default Profile;
