import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                </p>
                <br />
                <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                </p>
                <br />
                <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                </p>
            </div>
            <h2>Exploring house</h2>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ........................................... 
            </p>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Fayssal Chokri - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <h2>Mid-Tempo?</h2>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Henry Heffernan - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Fayssal Chokri - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Like I said, I decided to come back to this track because I
                absolutely loved so much about it. When I picked up work on it
                again I decided to totally remix the drums and I'm super proud
                with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums and Sub]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p>
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                I love to make music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been producing for over 6 years and have made
                hundreds maybe even a thousand tracks/loops in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
