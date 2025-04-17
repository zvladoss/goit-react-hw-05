import React from "react";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.errorCode}>404</h1>
      <p className={s.message}>
        Sorry, we couldn't find the page you're looking for!
      </p>
      <p className={s.suggestion}>Check the URL or go back to the homepage!</p>
    </div>
  );
};

export default NotFoundPage;
