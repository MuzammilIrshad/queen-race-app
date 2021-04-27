import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
    const queenAlice = useRef();
    const foreground1 = useRef();
    const foreground2 = useRef();
    const background1 = useRef();
    const background2 = useRef();
    useEffect(() => {
        var sceneryFrames = [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
        ];

        var sceneryTimingBackground = {
            duration: 36000,
            iterations: Infinity
        };

        var sceneryTimingForeground = {
            duration: 12000,
            iterations: Infinity
        };
        var spriteFrames = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }
        ];
        var background1Movement = background1.current.animate(
            sceneryFrames, sceneryTimingBackground);

        var background2Movement = background2.current.animate(
            sceneryFrames, sceneryTimingBackground);

        var redQueen_alice = queenAlice.current.animate(
            spriteFrames, {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
        });

        var foreground1Movement = foreground1.current.animate(
            sceneryFrames, sceneryTimingForeground);

        var foreground2Movement = foreground2.current.animate(
            sceneryFrames, sceneryTimingForeground);

        var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];

        var adjustBackgroundPlayback = function () {
            if (redQueen_alice.playbackRate < .8) {
                sceneries.forEach(function (anim) {
                    anim.playbackRate = redQueen_alice.playbackRate / 2 * -1;
                });
            } else if (redQueen_alice.playbackRate > 1.2) {
                sceneries.forEach(function (anim) {
                    anim.playbackRate = redQueen_alice.playbackRate / 2;
                });
            } else {
                sceneries.forEach(function (anim) {
                    anim.playbackRate = 0;
                });
            }
        }
        adjustBackgroundPlayback();

        setInterval(function () {
            /* Set decay */
            if (redQueen_alice.playbackRate > .4) {
                redQueen_alice.playbackRate *= .9;
            }
            adjustBackgroundPlayback();
        }, 3000);

        var goFaster = function () {
            /* But you can speed them up by giving the screen a click or a tap. */
            redQueen_alice.playbackRate *= 1.1;
            adjustBackgroundPlayback();
        }

        document.addEventListener("click", goFaster);
        document.addEventListener("touchstart", goFaster);
    });
    return (
        <div className="wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img id="red-queen_and_alice_sprite" ref={queenAlice} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
                  </div>
               </div>

            <div className="scenery" ref={foreground1} id="foreground1">
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
            <div className="scenery" ref={foreground2} id="foreground2">
                <img id="bush"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                            <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
            </div>
            <div className="scenery" ref={background1} id="background1">
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
            </div>
            <div className="scenery" ref={background2} id="background2">
                 <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>
                  <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                  <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
              </div>
        </div>
  );
}

export default App;
