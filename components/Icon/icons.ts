interface IIconsProps {
  [key: string]: {
    path: string;
    viewBox: string;
  };
}

const icons: IIconsProps = {
  add: {
    viewBox: "0 0 32 32",
    path: "M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5 15.5-6.938 15.5-15.5-6.938-15.5-15.5-15.5zM25 17.75c0 0.413-0.337 0.75-0.75 0.75h-5.75v5.75c0 0.413-0.337 0.75-0.75 0.75h-3.5c-0.412 0-0.75-0.337-0.75-0.75v-5.75h-5.75c-0.412 0-0.75-0.337-0.75-0.75v-3.5c0-0.412 0.338-0.75 0.75-0.75h5.75v-5.75c0-0.412 0.338-0.75 0.75-0.75h3.5c0.413 0 0.75 0.338 0.75 0.75v5.75h5.75c0.413 0 0.75 0.338 0.75 0.75v3.5z",
  },
  video: {
    path: "M21.012 4h-18.025c-1.65 0-2.987 1.338-2.987 2.987v18.025c0 1.65 1.337 2.988 2.987 2.988h18.025c1.65 0 2.988-1.337 2.988-2.988v-18.025c0-1.65-1.337-2.987-2.988-2.987zM32.85 6.356l-6.85 4.725v9.838l6.85 4.719c1.325 0.913 3.15-0.019 3.15-1.613v-16.056c0-1.588-1.819-2.525-3.15-1.612z",
    viewBox: "0 0 36 32",
  },
  search: {
    path: "M31.563 27.669l-6.231-6.231c-0.281-0.281-0.663-0.438-1.063-0.438h-1.019c1.725-2.206 2.75-4.981 2.75-8 0-7.181-5.819-13-13-13s-13 5.819-13 13 5.819 13 13 13c3.019 0 5.794-1.025 8-2.75v1.019c0 0.4 0.156 0.781 0.438 1.063l6.231 6.231c0.587 0.587 1.538 0.587 2.119 0l1.769-1.769c0.587-0.587 0.587-1.538 0.006-2.125zM13 21c-4.419 0-8-3.575-8-8 0-4.419 3.575-8 8-8 4.419 0 8 3.575 8 8 0 4.419-3.575 8-8 8z",
    viewBox: "0 0 32 32",
  },
  list: {
    path: "M29 2h-26c-1.657 0-3 1.343-3 3v22c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3v-22c0-1.657-1.343-3-3-3zM28.625 27h-25.25c-0.207 0-0.375-0.168-0.375-0.375v0-21.25c0-0.207 0.168-0.375 0.375-0.375v0h25.25c0.207 0 0.375 0.168 0.375 0.375v0 21.25c0 0.207-0.168 0.375-0.375 0.375v0zM26 21.25v1.5c0 0.414-0.336 0.75-0.75 0.75h-12.5c-0.414 0-0.75-0.336-0.75-0.75v-1.5c0-0.414 0.336-0.75 0.75-0.75h12.5c0.414 0 0.75 0.336 0.75 0.75zM26 15.25v1.5c0 0.414-0.336 0.75-0.75 0.75h-12.5c-0.414 0-0.75-0.336-0.75-0.75v-1.5c0-0.414 0.336-0.75 0.75-0.75h12.5c0.414 0 0.75 0.336 0.75 0.75zM26 9.25v1.5c0 0.414-0.336 0.75-0.75 0.75h-12.5c-0.414 0-0.75-0.336-0.75-0.75v-1.5c0-0.414 0.336-0.75 0.75-0.75h12.5c0.414 0 0.75 0.336 0.75 0.75zM10.25 10c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25 1.007-2.25 2.25-2.25 2.25 1.007 2.25 2.25zM10.25 16c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25 1.007-2.25 2.25-2.25 2.25 1.007 2.25 2.25zM10.25 22c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25 1.007-2.25 2.25-2.25 2.25 1.007 2.25 2.25z",
    viewBox: "0 0 32 32",
  },
  bars: {
    path: "M1 8.25h26c0.552 0 1-0.448 1-1v-2.5c0-0.552-0.448-1-1-1h-26c-0.552 0-1 0.448-1 1v2.5c0 0.552 0.448 1 1 1zM1 18.25h26c0.552 0 1-0.448 1-1v-2.5c0-0.552-0.448-1-1-1h-26c-0.552 0-1 0.448-1 1v2.5c0 0.552 0.448 1 1 1zM1 28.25h26c0.552 0 1-0.448 1-1v-2.5c0-0.552-0.448-1-1-1h-26c-0.552 0-1 0.448-1 1v2.5c0 0.552 0.448 1 1 1z",
    viewBox: "0 0 28 32",
  },
  angleLeft: {
    path: "M1.981 14.938l8.5-8.5c0.588-0.588 1.537-0.588 2.119 0l1.412 1.412c0.588 0.588 0.588 1.537 0 2.119l-6.019 6.031 6.025 6.025c0.588 0.587 0.588 1.538 0 2.119l-1.412 1.419c-0.588 0.587-1.537 0.587-2.119 0l-8.5-8.5c-0.594-0.587-0.594-1.537-0.006-2.125z",
    viewBox: "0 0 16 32",
  },
  angleRight: {
    path: "M14.019 17.063l-8.5 8.5c-0.588 0.587-1.538 0.587-2.119 0l-1.413-1.413c-0.587-0.587-0.587-1.538 0-2.119l6.025-6.025-6.025-6.025c-0.587-0.588-0.587-1.537 0-2.119l1.406-1.425c0.587-0.588 1.537-0.588 2.119 0l8.5 8.5c0.594 0.588 0.594 1.538 0.006 2.125z",
    viewBox: "0 0 16 32",
  },
  bookmarkOutlined: {
    viewBox: "0 0 24 32",
    path: "M21 0h-18c-1.657 0-3 1.343-3 3v29l12-7 12 7v-29c0-1.657-1.343-3-3-3zM21 26.777l-9-5.25-9 5.25v-23.402c0-0.207 0.168-0.375 0.375-0.375v0h17.25c0.207 0 0.375 0.168 0.375 0.375v23.402z",
  },
  bookmarkFilled: {
    viewBox: "0 0 24 32",
    path: "M0 32v-29c0-1.657 1.343-3 3-3h18c1.657 0 3 1.343 3 3v29l-12-7-12 7z",
  },
  money: {
    viewBox: "0 0 40 32",
    path: "M20 9c-3.314 0-6 3.134-6 7s2.686 7 6 7c3.313 0 6-3.133 6-7s-2.686-7-6-7zM22.5 19.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h1v-3.465l-0.029 0.019c-0.078 0.053-0.174 0.084-0.277 0.084-0.173 0-0.325-0.088-0.415-0.221l-0.001-0.002-0.555-0.832c-0.053-0.078-0.084-0.174-0.084-0.277 0-0.173 0.088-0.325 0.221-0.415l0.002-0.001 0.958-0.639c0.234-0.158 0.522-0.252 0.832-0.252 0 0 0 0 0 0h0.849c0.276 0 0.5 0.224 0.5 0.5v5.5h1c0.276 0 0.5 0.224 0.5 0.5v1zM38 4h-36c-1.104 0-2 0.896-2 2v20c0 1.104 0.896 2 2 2h36c1.104 0 2-0.896 2-2v-20c0-1.104-0.896-2-2-2zM37 21c-2.209 0-4 1.791-4 4h-26c0-2.209-1.791-4-4-4v-10c2.209 0 4-1.791 4-4h26c0 2.209 1.791 4 4 4v10z",
  },
  history: {
    viewBox: "0 0 32 32",
    path: "M31.5 15.971c0.016 8.54-6.949 15.523-15.489 15.529-3.688 0.003-7.076-1.283-9.739-3.432-0.692-0.559-0.744-1.596-0.115-2.225l0.704-0.704c0.538-0.538 1.397-0.597 1.993-0.124 1.962 1.557 4.444 2.486 7.145 2.486 6.357 0 11.5-5.144 11.5-11.5 0-6.357-5.144-11.5-11.5-11.5-3.051 0-5.822 1.186-7.879 3.121l3.172 3.172c0.63 0.63 0.184 1.707-0.707 1.707h-9.086c-0.552 0-1-0.448-1-1v-9.086c0-0.891 1.077-1.337 1.707-0.707l3.086 3.086c2.783-2.659 6.554-4.293 10.707-4.293 8.551 0 15.484 6.924 15.5 15.471zM20.193 20.895l0.614-0.789c0.509-0.654 0.391-1.596-0.263-2.105l-2.544-1.979v-6.522c0-0.828-0.672-1.5-1.5-1.5h-1c-0.828 0-1.5 0.672-1.5 1.5v8.478l4.088 3.18c0.654 0.509 1.596 0.391 2.105-0.263z",
  },
  clock: {
    viewBox: "0 0 32 32",
    path: "M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5 15.5-6.938 15.5-15.5-6.938-15.5-15.5-15.5zM16 28.5c-6.906 0-12.5-5.594-12.5-12.5s5.594-12.5 12.5-12.5 12.5 5.594 12.5 12.5-5.594 12.5-12.5 12.5zM19.863 21.975l-5.306-3.856c-0.194-0.144-0.306-0.369-0.306-0.606v-10.262c0-0.412 0.338-0.75 0.75-0.75h2c0.413 0 0.75 0.338 0.75 0.75v8.856l4.175 3.038c0.337 0.244 0.406 0.712 0.163 1.050l-1.175 1.619c-0.244 0.331-0.712 0.406-1.050 0.163z",
  },
  cancel: {
    viewBox: "0 0 22 32",
    path: "M15.17 16l6.254-6.254c0.767-0.768 0.767-2.012 0-2.78l-1.39-1.39c-0.767-0.768-2.012-0.768-2.78 0l-6.254 6.254-6.254-6.254c-0.768-0.768-2.012-0.768-2.78 0l-1.39 1.39c-0.767 0.768-0.767 2.012 0 2.78l6.254 6.254-6.254 6.254c-0.767 0.767-0.767 2.012 0 2.78l1.39 1.39c0.767 0.767 2.013 0.767 2.78 0l6.254-6.254 6.254 6.254c0.767 0.767 2.012 0.767 2.78 0l1.39-1.39c0.767-0.767 0.767-2.012 0-2.78l-6.254-6.254z",
  },
  movie: {
    viewBox: "0 0 32 32",
    path: "M30.5 4h-0.5v1.25c0 0.412-0.337 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.338-0.75-0.75v-1.25h-20v1.25c0 0.412-0.338 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.338-0.75-0.75v-1.25h-0.5c-0.831 0-1.5 0.669-1.5 1.5v21c0 0.831 0.669 1.5 1.5 1.5h0.5v-1.25c0-0.413 0.337-0.75 0.75-0.75h2.5c0.412 0 0.75 0.337 0.75 0.75v1.25h20v-1.25c0-0.413 0.337-0.75 0.75-0.75h2.5c0.413 0 0.75 0.337 0.75 0.75v1.25h0.5c0.831 0 1.5-0.669 1.5-1.5v-21c0-0.831-0.669-1.5-1.5-1.5zM6 23.25c0 0.413-0.338 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.337-0.75-0.75v-2.5c0-0.413 0.337-0.75 0.75-0.75h2.5c0.412 0 0.75 0.337 0.75 0.75v2.5zM6 17.25c0 0.413-0.338 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.337-0.75-0.75v-2.5c0-0.412 0.337-0.75 0.75-0.75h2.5c0.412 0 0.75 0.338 0.75 0.75v2.5zM6 11.25c0 0.412-0.338 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.338-0.75-0.75v-2.5c0-0.412 0.337-0.75 0.75-0.75h2.5c0.412 0 0.75 0.338 0.75 0.75v2.5zM23 24.25c0 0.413-0.337 0.75-0.75 0.75h-12.5c-0.412 0-0.75-0.337-0.75-0.75v-6c0-0.413 0.338-0.75 0.75-0.75h12.5c0.413 0 0.75 0.337 0.75 0.75v6zM23 13.75c0 0.412-0.337 0.75-0.75 0.75h-12.5c-0.412 0-0.75-0.338-0.75-0.75v-6c0-0.412 0.338-0.75 0.75-0.75h12.5c0.413 0 0.75 0.338 0.75 0.75v6zM30 23.25c0 0.413-0.337 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.337-0.75-0.75v-2.5c0-0.413 0.337-0.75 0.75-0.75h2.5c0.413 0 0.75 0.337 0.75 0.75v2.5zM30 17.25c0 0.413-0.337 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.337-0.75-0.75v-2.5c0-0.412 0.337-0.75 0.75-0.75h2.5c0.413 0 0.75 0.338 0.75 0.75v2.5zM30 11.25c0 0.412-0.337 0.75-0.75 0.75h-2.5c-0.413 0-0.75-0.338-0.75-0.75v-2.5c0-0.412 0.337-0.75 0.75-0.75h2.5c0.413 0 0.75 0.338 0.75 0.75v2.5z",
  },
  authenticate: {
    viewBox: "0 0 32 32",
    path: "M26 28h-5.25c-0.413 0-0.75-0.337-0.75-0.75v-2.5c0-0.413 0.337-0.75 0.75-0.75h5.25c1.106 0 2-0.894 2-2v-12c0-1.106-0.894-2-2-2h-5.25c-0.413 0-0.75-0.338-0.75-0.75v-2.5c0-0.412 0.337-0.75 0.75-0.75h5.25c3.313 0 6 2.688 6 6v12c0 3.313-2.688 6-6 6zM23.063 15.438l-10.5-10.5c-0.938-0.938-2.563-0.281-2.563 1.063v6h-8.5c-0.831 0-1.5 0.669-1.5 1.5v6c0 0.831 0.669 1.5 1.5 1.5h8.5v6c0 1.344 1.625 2 2.563 1.063l10.5-10.5c0.581-0.587 0.581-1.538 0-2.125z",
  },
  cancelFilled: {
    viewBox: "0 0 32 32",
    path: "M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5 15.5-6.938 15.5-15.5-6.938-15.5-15.5-15.5zM23.6 20.069c0.294 0.294 0.294 0.769 0 1.063l-2.475 2.469c-0.294 0.294-0.769 0.294-1.063 0l-4.063-4.1-4.069 4.1c-0.294 0.294-0.769 0.294-1.063 0l-2.469-2.475c-0.294-0.294-0.294-0.769 0-1.063l4.1-4.063-4.1-4.069c-0.294-0.294-0.294-0.769 0-1.063l2.475-2.475c0.294-0.294 0.769-0.294 1.063 0l4.063 4.106 4.069-4.1c0.294-0.294 0.769-0.294 1.063 0l2.475 2.475c0.294 0.294 0.294 0.769 0 1.063l-4.106 4.063 4.1 4.069z",
  },
  logout: {
    viewBox: "0 0 32 32",
    path: "M31.063 17.063l-10.5 10.5c-0.938 0.938-2.563 0.281-2.563-1.063v-6h-8.5c-0.831 0-1.5-0.669-1.5-1.5v-6c0-0.831 0.669-1.5 1.5-1.5h8.5v-6c0-1.338 1.619-2 2.563-1.063l10.5 10.5c0.581 0.588 0.581 1.538 0 2.125zM12 27.25v-2.5c0-0.413-0.338-0.75-0.75-0.75h-5.25c-1.106 0-2-0.894-2-2v-12c0-1.106 0.894-2 2-2h5.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-5.25c-3.313 0-6 2.688-6 6v12c0 3.313 2.688 6 6 6h5.25c0.412 0 0.75-0.337 0.75-0.75z",
  },
  menu: {
    viewBox: "0 0 12 32",
    path: "M6 11.5c2.488 0 4.5 2.012 4.5 4.5s-2.012 4.5-4.5 4.5-4.5-2.012-4.5-4.5 2.013-4.5 4.5-4.5zM1.5 5c0 2.487 2.013 4.5 4.5 4.5s4.5-2.013 4.5-4.5-2.012-4.5-4.5-4.5-4.5 2.013-4.5 4.5zM1.5 27c0 2.488 2.013 4.5 4.5 4.5s4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5-4.5 2.012-4.5 4.5z",
  },
  visible: {
    viewBox: "0 0 36 32",
    path: "M35.782 15.088c-3.389-6.613-10.099-11.088-17.782-11.088s-14.395 4.477-17.782 11.088c-0.137 0.265-0.217 0.579-0.217 0.912s0.080 0.647 0.223 0.924l-0.005-0.011c3.389 6.613 10.099 11.088 17.782 11.088s14.395-4.477 17.782-11.088c0.137-0.265 0.217-0.579 0.217-0.912s-0.080-0.647-0.223-0.924l0.005 0.011zM18 25c-4.971 0-9-4.029-9-9s4.029-9 9-9c4.971 0 9 4.029 9 9v0c0 0.001 0 0.003 0 0.004 0 4.968-4.027 8.996-8.996 8.996-0.002 0-0.003 0-0.005 0h0zM18 10c-0.567 0.008-1.11 0.094-1.624 0.248l0.042-0.011c0.363 0.489 0.582 1.105 0.582 1.772 0 1.652-1.339 2.991-2.991 2.991-0.667 0-1.283-0.218-1.781-0.588l0.008 0.006c-0.133 0.47-0.209 1.010-0.209 1.568 0 3.306 2.68 5.986 5.986 5.986s5.986-2.68 5.986-5.986c0-3.306-2.68-5.986-5.986-5.986-0.005 0-0.010 0-0.015 0h0.001z",
  },
  invisible: {
    viewBox: "0 0 40 32",
    path: "M20 25c-4.741 0-8.578-3.669-8.931-8.319l-6.556-5.067c-0.862 1.081-1.655 2.224-2.295 3.474-0.137 0.265-0.217 0.579-0.217 0.912s0.080 0.647 0.223 0.924l-0.005-0.011c3.389 6.613 10.099 11.088 17.782 11.088 1.682 0 3.304-0.25 4.868-0.654l-3.243-2.509c-0.486 0.098-1.047 0.158-1.621 0.163l-0.004 0zM39.614 28.631l-6.909-5.34c2.072-1.754 3.775-3.872 5.024-6.265l0.054-0.114c0.137-0.265 0.217-0.579 0.217-0.912s-0.080-0.647-0.223-0.924l0.005 0.011c-3.389-6.613-10.099-11.088-17.782-11.088-3.377 0.004-6.549 0.877-9.306 2.406l0.099-0.050-7.951-6.146c-0.168-0.131-0.382-0.211-0.614-0.211-0.32 0-0.605 0.15-0.788 0.384l-0.002 0.002-1.227 1.579c-0.131 0.168-0.21 0.381-0.21 0.614 0 0.32 0.15 0.605 0.384 0.788l0.002 0.002 36.773 28.421c0.168 0.131 0.382 0.211 0.614 0.211 0.32 0 0.605-0.15 0.788-0.384l0.002-0.002 1.227-1.579c0.131-0.168 0.21-0.381 0.21-0.613 0-0.32-0.15-0.605-0.384-0.788l-0.002-0.002zM28.131 19.756l-2.456-1.899c0.198-0.552 0.316-1.19 0.325-1.853l0-0.004c0-0.023 0-0.051 0-0.078 0-3.271-2.652-5.922-5.922-5.922-0.592 0-1.163 0.087-1.702 0.248l0.042-0.011c0.362 0.487 0.581 1.099 0.582 1.763v0c-0.010 0.227-0.045 0.441-0.101 0.645l0.005-0.020-4.601-3.556c1.531-1.286 3.522-2.068 5.697-2.069h0c0.001 0 0.003 0 0.005 0 4.968 0 8.995 4.027 8.995 8.995 0 0.002 0 0.004 0 0.005v-0c0 1.352-0.331 2.612-0.869 3.757z"
  },
  error: {
    viewBox: "0 0 32 32",
    path: "M31.5 16c0 8.562-6.94 15.5-15.5 15.5s-15.5-6.938-15.5-15.5c0-8.557 6.94-15.5 15.5-15.5s15.5 6.943 15.5 15.5zM16 19.125c-1.588 0-2.875 1.287-2.875 2.875s1.287 2.875 2.875 2.875 2.875-1.287 2.875-2.875-1.287-2.875-2.875-2.875zM13.27 8.791l0.464 8.5c0.022 0.398 0.351 0.709 0.749 0.709h3.034c0.398 0 0.727-0.311 0.749-0.709l0.464-8.5c0.023-0.43-0.319-0.791-0.749-0.791h-3.961c-0.43 0-0.772 0.361-0.749 0.791z",
  },
  warning: {
    viewBox: "0 0 36 32",
    path: "M35.595 27.501c1.154 2-0.294 4.499-2.599 4.499h-29.993c-2.309 0-3.75-2.503-2.599-4.499l14.997-26.002c1.154-2.001 4.045-1.997 5.197 0l14.996 26.002zM18 22.125c-1.588 0-2.875 1.287-2.875 2.875s1.287 2.875 2.875 2.875 2.875-1.287 2.875-2.875-1.287-2.875-2.875-2.875zM15.27 11.791l0.464 8.5c0.022 0.398 0.351 0.709 0.749 0.709h3.034c0.398 0 0.727-0.311 0.749-0.709l0.464-8.5c0.023-0.43-0.319-0.791-0.749-0.791h-3.961c-0.43 0-0.772 0.361-0.749 0.791z",
  },
  success: {
    viewBox: "0 0 32 32",
    path: "M31.5 16c0 8.56-6.94 15.5-15.5 15.5s-15.5-6.94-15.5-15.5 6.94-15.5 15.5-15.5 15.5 6.94 15.5 15.5zM14.207 24.207l11.5-11.5c0.39-0.39 0.39-1.024 0-1.414l-1.414-1.414c-0.39-0.391-1.024-0.391-1.414 0l-9.379 9.379-4.379-4.379c-0.39-0.39-1.024-0.39-1.414 0l-1.414 1.414c-0.391 0.39-0.391 1.024 0 1.414l6.5 6.5c0.391 0.391 1.024 0.391 1.414 0z",
  },
  info: {
    viewBox: "0 0 32 32",
    path: "M16 0.5c-8.56 0-15.5 6.943-15.5 15.5 0 8.562 6.94 15.5 15.5 15.5s15.5-6.938 15.5-15.5c0-8.557-6.94-15.5-15.5-15.5zM16 7.375c1.45 0 2.625 1.175 2.625 2.625s-1.175 2.625-2.625 2.625-2.625-1.175-2.625-2.625 1.175-2.625 2.625-2.625zM19.5 23.25c0 0.414-0.336 0.75-0.75 0.75h-5.5c-0.414 0-0.75-0.336-0.75-0.75v-1.5c0-0.414 0.336-0.75 0.75-0.75h0.75v-4h-0.75c-0.414 0-0.75-0.336-0.75-0.75v-1.5c0-0.414 0.336-0.75 0.75-0.75h4c0.414 0 0.75 0.336 0.75 0.75v6.25h0.75c0.414 0 0.75 0.336 0.75 0.75v1.5z",
  },
};

export default icons;
