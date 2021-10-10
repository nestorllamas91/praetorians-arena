import styles from '@/shared/error/styles';

export default function Error(props) {
  return (
    <div className="error-container">
      <div className="message">
        {(() => {
          switch (props.statusCode) {
            case 404:
              return (
                <>
                  <div className="code code-server">
                    <span>Error in the server!</span>
                    <span>404 Not Found</span>
                  </div>
                  <div className="explanation">
                    <span>The resource you requested could not be found on the server.</span>
                  </div>
                </>
              );
            case 500:
              return (
                <>
                  <div className="code code-server">
                    <span>Error in the server!</span>
                    <span>500 Internal Server Error</span>
                  </div>
                  <div className="explanation">
                    <span>Your request could not be completed because an error has occurred on the server.</span>
                  </div>
                </>
              );
            case undefined:
              return (
                <>
                  <div className="code">
                    <span>Error in the client!</span>
                  </div>
                  <div className="explanation">
                    <span>An error has occurred on your web browser.</span>
                  </div>
                </>
              );
            default:
              return (
                <>
                  <div className="code code-server">
                    <span>Error in the server!</span>
                    <span>{props.statusCode}</span>
                  </div>
                </>
              );
          }
        })()}
      </div>
      <img src={'/assets/images/misc/legionnaire.png'} height="500px" />
      <style jsx>{styles}</style>
    </div>
  );
}
