import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const GiphyIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="2 2 16 16" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M15.4 3c1.386 0 2.52 1.187 2.596 2.682l.004.162v8.312c0 1.517-1.085 2.756-2.453 2.84L15.4 17H4.6c-1.386 0-2.52-1.187-2.596-2.682L2 14.156V5.844c0-1.517 1.085-2.756 2.452-2.84L4.6 3h10.8zm-.15 1H4.75c-.926 0-1.684.793-1.746 1.797L3 5.929v8.142c0 1.021.72 1.857 1.63 1.925l.12.004h10.5c.926 0 1.684-.793 1.746-1.796L17 14.07V5.93c0-1.021-.72-1.857-1.63-1.925L15.25 4zM6.851 7.002c.62 0 1.148.097 1.581.299.267.124.374.424.24.671a.562.562 0 01-.726.222c-.268-.125-.632-.192-1.095-.192-1.026 0-1.77.832-1.77 2 0 1.119.813 1.998 1.77 1.998.597 0 1.002-.351 1.06-.673l.008-.08v-.746L7.54 10.5C7.242 10.5 7 10.276 7 10c0-.245.191-.45.443-.492l.098-.008.918.001a.53.53 0 01.532.41l.009.09v1.246C9 12.124 8.114 13 6.851 13 5.256 13 4 11.642 4 10.001 4 8.32 5.177 7.002 6.851 7.002zM11 7a.5.5 0 01.492.41l.008.09v5a.5.5 0 01-.992.09l-.008-.09v-5A.5.5 0 0111 7zm4.5 0a.5.5 0 01.09.992L15.5 8H14v2h1.5a.5.5 0 01.09.992L15.5 11H14v1.5a.5.5 0 01-.992.09L13 12.5v-5a.5.5 0 01.5-.5h2z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M15.4 3c1.386 0 2.52 1.187 2.596 2.682l.004.162v8.312c0 1.517-1.085 2.756-2.453 2.84L15.4 17H4.6c-1.386 0-2.52-1.187-2.596-2.682L2 14.156V5.844c0-1.517 1.085-2.756 2.452-2.84L4.6 3h10.8zM6.851 7.002C5.177 7.002 4 8.32 4 10.002 4 11.641 5.256 13 6.851 13c1.205 0 2.068-.798 2.144-1.633l.005-.12v-1.246l-.009-.09a.522.522 0 00-.434-.402l-.098-.008-.918-.001-.098.008A.513.513 0 007 10c0 .245.191.45.443.492l.098.008.378.001v.746l-.007.08c-.06.322-.464.673-1.06.673-.958 0-1.77-.88-1.77-1.999 0-1.166.743-1.999 1.77-1.999.462 0 .826.067 1.094.192a.562.562 0 00.726-.222c.134-.247.027-.547-.24-.671-.433-.202-.96-.299-1.58-.299zM11 7a.5.5 0 00-.492.41l-.008.09v5l.008.09a.5.5 0 00.984 0l.008-.09v-5l-.008-.09A.5.5 0 0011 7zm4.5 0h-2a.5.5 0 00-.492.41L13 7.5v5l.008.09a.5.5 0 00.984 0L14 12.5V11h1.5l.09-.008a.5.5 0 000-.984L15.5 10H14V8h1.5l.09-.008a.5.5 0 000-.984L15.5 7z"
      />
    </svg>
  ),
  displayName: 'GiphyIcon',
});
