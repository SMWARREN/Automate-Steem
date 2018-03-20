import React from 'react';
import TopCard from './TopCard';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');

        .app-main-container-items {
          z-index: 2 !important;
          margin-top: 50px;
        }
       .app-main-container{
          display: grid !important;
          grid-template-columns: 1fr 10fr 1fr;
          background-color: #f2f2f2;
        }
      .items {
        font-family: 'Montserrat', sans-serif;
        } `}
      </style>
      <div className="app-main-container-items">
        <div className="app-main-container">
          <div className="items" />
          <div className="items">
            <TopCard />
            <div id="lipsum">
              <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur lorem eget est laoreet rutrum. Nam efficitur dignissim malesuada. Vestibulum pretium vel nibh a laoreet. Maecenas feugiat odio eget dui pellentesque pretium. Vivamus tincidunt orci a vulputate ultricies. Proin convallis mattis nisl maximus vulputate. Pellentesque rhoncus, erat ac fermentum condimentum, erat nisi pretium erat, faucibus egestas dolor turpis et velit. Vivamus quis ante vitae felis varius lacinia. Aenean vitae dui tellus. Vivamus id est nec justo ultrices rhoncus gravida venenatis purus. Etiam placerat quam elit, a convallis ante fringilla at. Aenean et velit posuere, efficitur velit id, bibendum nulla.
              </p>
              <p>
Duis non posuere nibh, pretium accumsan leo. Aliquam lacinia porta nisi vel fermentum. Aliquam porttitor ultricies est, in lobortis est viverra quis. Nunc ut tellus non lorem consequat ultricies vel id augue. Aenean condimentum enim est, ullamcorper consectetur sapien tincidunt eu. Morbi tellus erat, tincidunt eget tortor dignissim, semper lacinia leo. Donec et felis eget libero euismod aliquet. Phasellus id nunc ac lacus pharetra vestibulum. Sed venenatis lacinia arcu, in ultrices nunc. Cras ut porta nibh. Sed id nunc in sapien ullamcorper lacinia eu et augue. Sed non eros tincidunt justo viverra pellentesque sit amet pretium enim. Quisque a pellentesque ante.
              </p>
              <p>
In sed diam at velit luctus laoreet id ac leo. Nulla urna velit, molestie bibendum commodo faucibus, ornare id eros. Curabitur venenatis varius diam vitae lacinia. Maecenas id diam ut elit convallis elementum vitae at arcu. Duis interdum id tellus id pulvinar. In condimentum hendrerit massa, in semper orci rutrum vel. Cras volutpat dui vel magna sodales blandit. Fusce pretium interdum metus, eu consectetur lorem feugiat vel. Aenean faucibus fringilla pharetra. Vivamus tortor lorem, aliquam vitae nisl eu, scelerisque dapibus ante. Proin pharetra viverra neque, porttitor efficitur libero pharetra at.
              </p>
              <p>
Nunc nibh mi, convallis ornare ante sit amet, ullamcorper dapibus lorem. Donec ac blandit felis. Proin at bibendum diam, quis aliquam odio. Aliquam condimentum elementum libero, vitae semper ante laoreet eu. Integer nec orci rhoncus, pretium diam nec, malesuada risus. Nulla vestibulum ante accumsan sem ultricies tincidunt. Duis at lacus euismod, tristique sapien quis, finibus nibh. Morbi varius dui gravida libero fermentum commodo. Nullam nibh velit, porta sed laoreet ac, iaculis ut lectus. Nunc et rhoncus magna. Morbi at fermentum eros. Nunc posuere libero eget sem porta dapibus. Integer lacinia, leo sed auctor auctor, nisl augue tristique dolor, at luctus tortor felis eget felis. Sed vel lobortis lorem. Nullam nec aliquet libero, tincidunt cursus justo.
              </p>
              <p>
Integer congue finibus laoreet. Maecenas fermentum tellus augue, ut tincidunt justo condimentum sit amet. Aenean mollis mi arcu, non viverra ante gravida pulvinar. Nullam elit arcu, pretium quis tempus et, tempor laoreet lectus. In hac habitasse platea dictumst. Etiam eros lorem, fringilla ac odio ac, maximus dapibus ex. Vivamus nec tortor id sem ornare pellentesque id sit amet odio. Proin ultricies ex vulputate eros tristique pretium. Nulla in fringilla massa. Praesent finibus ullamcorper massa non vestibulum. Pellentesque sit amet magna rhoncus, faucibus felis ut, hendrerit tellus. Integer non ex enim. Aliquam pharetra elit a massa euismod, quis euismod sapien gravida. Curabitur condimentum condimentum ipsum, non feugiat est rhoncus nec. Fusce mollis, orci ac efficitur finibus, massa neque dignissim augue, a luctus nisi arcu sit amet metus. Praesent ultricies, lectus vel ultrices tristique, ipsum tortor congue mi, sit amet mollis arcu augue eu velit.
              </p>
            </div>
          </div>
          <div className="items" />
        </div>
      </div>
    </div>
    );
  }
}
