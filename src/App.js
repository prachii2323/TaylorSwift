import './App.css';
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="https://www.taylorswifttribute.com/wp-content/uploads/2017/01/black-logo.png" alt="Logo" />
        </div>
        <ul className="navbar-items">
          <li>
          <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('life-story-section')}>Life Story</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('albums-section')}>Albums</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('gallery-section')}>Gallery</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('videos-section')}>Videos</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('awards-section')}>Awards</button>
          </li>
          <li className="dropdown">
          <button onClick={() => scrollToSection('legacy-section')}>Legacy</button>
          </li>
        </ul>
      </nav>
      <div className="home-section" id="home">
        <img src="http://news.harvard.edu/wp-content/uploads/2023/07/202307x_swift_1407_AP23198726852529.jpg" alt="Taylor Swift Cover" />
        <div className="text-on-image">
          <p>
          So what exactly makes
          Taylor Swift so great?
          </p>
        </div>
      </div>
      <div className="background-with-button">
        <button className="book-tickets-button">Book Your Tickets</button>
      </div>
      <div className="life-story-section" id="life-story-section">
        <h2>LIFE STORY</h2>
        <div className="life-story-content">
          <div className="life-story-image">
            <img src="https://imgix.ranker.com/user_node_img/50041/1000806818/original/taylor-swift-as-a-baby-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375" alt="Taylor Swift Image 1" />
          </div>
          <div className="life-story-text">
            <p>
            Taylor Alison Swift is a multi-Grammy award-winning American singer/songwriter who, in 2010 at the age of 20, became the youngest artist in history to win the Grammy Award for Album of the Year. In 2011 Swift was named Billboard's Woman of the Year. She also has been named the American Music Awards Artist of the Year, as well as the Entertainer of the Year for both the Country Music Association and the Academy of Country Music, among many other accolades. As of this writing, she is also the top-selling digital artist in music history.
            </p>
            <p>
            Taylor Alison Swift was born on December 13, 1989, in Reading, Pennsylvania, to Andrea (Finlay), a one-time marketing executive, and Scott Kingsley Swift, a financial adviser. Her ancestry includes German and English, as well as some Scottish, Irish, Welsh and 1/16th Italian. She was named after James Taylor, and her mother believed that if she had a gender neutral name it would help her forge a business career. Taylor spent most of her childhood on an 11-acre Christmas tree farm in Montgomery County, Pennsylvania. When she was nine years old the family moved to Wyomissing, PA, where she attended West Reading Elementary Center and Wyomissing Area Junior/Senior High School. Taylor spent her summers at her parents' vacation home at the Jersey shore. Her first hobby was English horse riding. 
            </p>
          </div>
          <div className="life-story-image">
            <img src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-23731-26159250-26159340-large.jpg?w=464" alt="Taylor Swift Image 2" />
          </div>
        </div>
        <div className="life-story-content">
        <div className="life-story-image">
            <img src="https://i.pinimg.com/736x/a1/e7/46/a1e74609ba91021a9759e9c0151249b2.jpg" alt="Taylor Swift Image 1" />
          </div>
          <div className="life-story-text">
          <p>
            At age 12 she was shown by a computer repairman how to play three chords on a guitar, inspiring her to write her first song, "Lucky You". She had previously won a national poetry contest with a poem entitled "Monster in My Closet", but now began to focus on songwriting. She moved to Nashville at age 14, having secured an artist development deal with RCA Records. She left RCA Records when she was 15--the label wanted her to record the work of other songwriters and wait until she was 18 to release an album, but she felt ready to launch her career with her own material. 
            </p>
            <p>
            Taylor released her debut album, "Taylor Swift", in October of 2006 and received generally positive reviews from music critics.The album sold 39,000 copies during its first week. In 2008 she released her second studio album, "Fearless". The lead single from the album, "Love Story", was released in September 2008 and became the second best-selling country single of all time, peaking at #4 on the Billboard Hot 100 chart. Four more singles were released throughout 2008 and 2009: "White Horse", "You Belong with Me", "Fifteen" and "Fearless". "You Belong with Me" was the album's highest-charting single, peaking at #2 on the Billboard Hot 100. The album debuted at #1 on the Billboard 200 Album Chart. It was the top-selling album of 2009 and brought Swift much crossover success.
            </p>
            </div>
            <div className="life-story-image">
            <img src="https://static.wixstatic.com/media/4e5d9e_efcafe2a314543ffa17c5a58e6d5cbfa~mv2.jpg/v1/fill/w_640,h_838,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e5d9e_efcafe2a314543ffa17c5a58e6d5cbfa~mv2.jpg" alt="Taylor Swift Image 1" />
          </div>
        </div>
        <div className="life-story-content">
        <div className="life-story-image">
            <img src="https://i.pinimg.com/736x/68/14/7d/68147dda7ee3f76445fd5403e86c0edf.jpg" alt="Taylor Swift Image 1" />
          </div>
          <div className="life-story-text">
          <p>
          In September 2009 she became the first country music artist to win an MTV Video Music Award when "You Belong with Me" was named Best Female Video. Her acceptance speech was interrupted by rapper Ye, who had been involved in a number of other award show incidents. West declared Beyoncé's video for "Single Ladies (Put a Ring on It)", nominated in the same category, to be "one of the best videos of all time". When Beyoncé later won the award for Video of the Year, she invited Taylor onstage to finish her speech. In November 2009 Taylor Swift became the youngest ever artist, and one of only six women, to be named Entertainer of the Year by the Country Music Association.
            </p>
            <p>
            Taylor Swift is only beginning to emerge as an acting talent, having voiced the role of Audrey in the animated feature The Lorax (2012). She also made appearances in the theatrical release Valentine's Day (2010) and in an episode of CSI: Crime Scene Investigation (2000). She contributed two original songs to The Hunger Games (2012) soundtrack: "Safe & Sound featuring The Civil Wars" and "Eyes Open". Taylor released her fifth album, titled "1989", on October 27, 2014. This album is when she finally made the complete transition from country to pop. She says that she will not be going to any Country Music Award shows. The album is named after the year she was born, and is a sort of '80s-sounding album, in the sense that it's more electronic.
            </p>
            </div>
            <div className="life-story-image">
            <img src="https://i.pinimg.com/originals/6c/45/70/6c4570ef1c6ab58b07b652adc603285e.jpg" alt="Taylor Swift Image 1" />
          </div>
        </div>
      </div>
      <div className="albums-section" id="albums-section">
        <h2>ALBUMS</h2>
        <div className="album-item">
    <img src="https://static.wixstatic.com/media/4e5d9e_4dbe06ca0d244b7eb12b9c102fee99a0~mv2.jpg/v1/fill/w_1198,h_1633,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e5d9e_4dbe06ca0d244b7eb12b9c102fee99a0~mv2.jpg" alt="Album 1" />
    <div className="album-description">
      <h3>Career Beginnings</h3>
      <p>In Nashville, Taylor started working with songwriter Liz Rose during two-hour writing sessions every Tuesday afternoon after school. Later, she became the youngest artist signed by Sony/ATV publishing house, but left the group at age 14. She believed she was running out of time because she wanted to capture the early years of her life on an album while it still represented what she was going through. 
   At a showcase in Nashville's Bluebird Cafe in 2005, Swift caught the attention of Scott Borchetta, a record executive who was preparing to form an independent record label, Big Machine Records. She became one of Big Machine's first signings, with her father purchasing a three percent share of the company. 
   Taylor then started working on her debut album and persuaded Big Machine to hire Nathan Chapman to produce her songs. Her first lead single “Tim McGraw” was released in June 2006, and Taylor Swift’s self titled album was released later that year, on October 24, 2006. It peaked at number 5 on the US Billboard 200, where it spent 275 weeks. Swift was also the opening act for Brad Paisley’s 2007 tour to promote her album and spent 2006 and 2007 doing promotion on radios, television, and being the opening act for country artists in the US. Throughout 2007 and 2008, Taylor released four more singles from her debut album and all of them appeared on Billboard's Hot Country Songs chart.
   Swift released her first two EPs "The Taylor Swift Holiday Collection" and "Beautiful Eyes" in October 2007 and July 2008, respectively, winning accolades for all of her first three projects. 
   She became the youngest person to be honored with the BMI Songwriter of the Year title in 2007. She won awards at the CMAs, ACMs and AMAs while also securing a nomination for Best New Artist at the 50th Grammy Awards.</p>
    </div>
  </div>
  <div className="album-item">
    <div className="album-description">
      <h3>Fearless</h3>
      <p> Swift's sophomore album, Fearless, was released on November 11, 2008. Five singles were released throughout 2008 and 2009, with "Love Story", the lead single, peaking at number 4 on the Billboard Hot 100  chart and number 1 in Australia. The second single, "You Belong With Me", peaked at number 2 in the US. The album debuted at number one on the Billboard 200 and was the top selling album of 2009 in the US. 
   The Fearless Tour – Swift's first headlining concert tour – grossed over $63 million, with Taylor releasing a documentary of the tour that was aired on television and released on DVD. Throughout 2009 and 2010, Swift won multiple awards with her LP at prestigious award shows such as the CMAs and the ACMs, including Artist of the Year at the AMAs and her first Album of the Year statue at the 52nd Grammys, where Swift also bagged another 3 wins. She was named 'Female Artist of the Year' by Billboard back in 2009 as well. 
   Taylor also co-wrote songs with artists such as John Mayer, Boys Like Girls, and Kellie Pickler, and wrote 2 tracks for Disney Channel’s Hannah Montana – "Crazier" and "You'll Always Find Your Way Back Home" – which were featured on the movie’s soundtrack. 
   During Fearless era, Taylor also wrote “Today Was A Fairytale” for the Valentine's Day movie Soundtrack, which peaked at number 2 in the US.</p>
    </div>
    <img src="https://static.wixstatic.com/media/4e5d9e_8885a89869a9455ca718b16c4d044bc6~mv2.jpg/v1/fill/w_1198,h_1228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e5d9e_8885a89869a9455ca718b16c4d044bc6~mv2.jpg" alt="Album 2" />
  </div>
  <div className="album-item">
    <img src="https://static.wixstatic.com/media/4e5d9e_1cfb63d809f149cb860039bbbc1ecde2~mv2.jpg/v1/fill/w_1198,h_1353,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e5d9e_1cfb63d809f149cb860039bbbc1ecde2~mv2.jpg" alt="Album 1" />
    <div className="album-description">
      <h3>Speak Now</h3>
      <p>In August 2010, Swift released "Mine”, the lead single from her third studio album, Speak Now. It debuted on the US Billboard Hot 100 chart at number three. Following criticism claiming Taylor’s songwriting was good because she worked with co-writers, Swift wrote all 17 tracks on her third record by herself as well as co-produced every song. 
   The album was released on October 25, 2010, debuting at number 1 on Billboard 200, with 1 million copies sold in its first week. 
   At the 54th Grammy Awards, in 2012, Swift won Best Country Song and Best Country Solo Performance for "Mean", which she performed during the ceremony in response to her much criticized 2010 Grammy performance, serving as a testament to her abilities as a musician. 
  Swift won several awards for Speak Now, including Songwriter of the Year at the BMI Awards, Entertainer of the Year at the ACMs and CMAs, and was named Billboard’s Woman of the Year. The album also received general acclaim from critics, with Rolling Stone praising Taylor abilities as a rockstar. 
   The Speak Now World Tour was done between 2011 and 2012, grossing over $123 million. In November 2011, she released a live album, the “Speak Now World Tour Live". 
   Swift also contributed to The Hunger Games soundtrack with two original songs: “Eyes Open” and “Safe & Sound”, recorded with The Civil Wars. The latter went on to win a Grammy award as well as a Golden Globe nomination. Taylor was featured on BoB's single "Both of Us”, released in May 2012. </p>
    </div>
  </div>
  <div className="album-item">
    <div className="album-description">
      <h3>Red</h3>
      <p> In August 2012, Swift released "We Are Never Ever Getting Back Together", the lead single from her fourth studio album, RED. It became her first number one in the US and New Zealand, and reached the top spot on iTunes digital song sales chart only 50 minutes after its release. Her third single, "I Knew You Were Trouble”, peaked in the top 5 of the most important music market countries in the world, reaching the 2nd position on Billboard Hot 100. 
   RED was released on October 22, 2012. For this project, Taylor worked with new producers and songwriters, such as Max Martin and Shellback – who would become two of Taylor’s biggest collaborators in the future – as well as Nathan Chapman and Liz Rose, with whom she’d been working since her earlier days. The album incorporates new genres for Swift, like heartland rock, dubstep and dance pop influences. 
   RED debuted at number 1 in the US, with a first week sale of 1.2 million copies, and was Swift's first number 1 album in the UK. The Red Tour ran from March 2013 to June 2014 and grossed over $150 million, becoming the highest grossing country tour when it wrapped. 
   Red earned Swift several accolades, including 4 Grammy nominations, a VMA trophy, multiple AMA statues and a BMI award for Songwriter of the Year. Taylor was also honored by the Country Music Academy with the Pinnacle Award. 
   In 2013, Taylor recorded "Sweeter than Fiction" for the One Chance movie soundtrack. It became her first project with producer Jack Antonoff, who she would continue to work with in the future. Taylor also collaborated with Tim McGraw and Keith Urban in one of the most successful country songs of that year, “Highway Don’t Care”.</p>
    </div>
    <img src="https://static.wixstatic.com/media/4e5d9e_b95e390147d7446399e64e138693af84~mv2.jpg/v1/fill/w_1198,h_1493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4e5d9e_b95e390147d7446399e64e138693af84~mv2.jpg" alt="Album 2" />
  </div>
  <div className="album-item">
    <img src="https://static.wixstatic.com/media/4e5d9e_afe117741a6049868a05c7d346fdeb95~mv2.jpg/v1/fill/w_1106,h_1869,al_c,q_90,enc_auto/4e5d9e_afe117741a6049868a05c7d346fdeb95~mv2.jpg" alt="Album 1" />
    <div className="album-description">
      <h3>1989</h3>
      <p> In March of 2014, Taylor moved to New York City while she worked on her fifth studio album, 1989, which would become her most successful and longest-charting record. Influenced by 1980s synth-pop, Swift severed ties with the country sound of her previous albums, and marketed 1989 as her "first documented, official pop album". The album was released on October 27, 2014 and sold 1.28 million copies in the US during the first week of release, debuting at the top of Billboard 200 chart. 
  Three of its singles – “Shake It Off", "Blank Space", and "Bad Blood”, featuring rapper Kendrick Lamar – reached number one in Australia, Canada, and in the US. 
   The 1989 World Tour ran from May to December 2015 and was the highest-grossing tour of the year, with $250 million in total revenue. 
   During this era, Taylor went up against two of the biggest steaming services in the world, Spotify and Apple Music, in an effort to oppose the way these companies payed artists. In November 2014, Swift removed her entire catalog from Spotify, arguing that the streaming company’s ad-supported free service undermined the premium service, which provides higher royalties for songwriters. In June of 2015, Taylor wrote an open letter criticizing Apple Music for not offering royalties to artists during the streaming service's three-month free trial period. The following day, Apple announced that it would pay artists during the free trial period. 
   Swift was named Billboard's Woman of the Year in 2014, and at the 2014 American Music Awards, she received the inaugural Dick Clark Award for Excellence. During this era, Swift also won a BRIT, several VMAs, and multiple other accolades which solidified the 1989 era as the most awarded pop era of all time. 
   At the 58th Grammy Awards in 2016, 1989 won in 3 categories, including Album of the Year. Swift became the first woman and fifth act overall to win Album of the Year twice as a lead artist. 
   Swift co-wrote "This Is What You Came For" with Calvin Harris in 2016, and early in 2017, she collaborated with Zayn Malik on “I Don’t Wanna Live Forever”, for the Fifty Shades Darker soundtrack. The song reached number two in the US and won Best Collaboration at the 2017 MTV Video Music Awards.
   "Better Man”, a song Taylor had written during Red era, was released on Little Big Town's seventh album, The Breaker, and earned Swift an award for Song of the Year at the 51st CMA Awards in 2017.</p>
    </div>
  </div>
  <div className="album-item">
    <div className="album-description">
      <h3>reputation</h3>
      <p> After disappearing from social media and the public eye during most of 2016, Swift executed one of the most successful comebacks in history with her sixth studio album, reputation. “Look What You Made Me Do” was released as the albums’s lead single and its music video broke the record for the most views in the first 24 hours of release.
   The album was released on November 10, 2017 and incorporated a heavy electropop sound, with hip hop, R&B and EDM influences. It debuted at #1 on the Billboard 200, with first-week sales of 1.21 million copies. With this achievement, Swift became the first act to have four albums sell one million copies within one week in the US. The project spawned three other international singles, including the US top-five entry "...Ready for It?". 
   In support of reputation, she embarked on her reputation Stadium Tour, which ran from May to November 2018. In the US, the tour grossed $266.1 million in box office and sold over two million tickets, breaking Swift's own record for the highest-grossing US tour by a woman, which was previously held by her 1989 World Tour ($181.5 million). It also became the highest-grossing North American concert tour in history. Worldwide, the tour grossed $345.7 million. On December 31st, Swift released the reputation Stadium Tour concert film on Netflix. 
   Reputation was nominated for Best Pop Vocal Album at the 61st Grammy Awards in 2019. At the 2018 AMAs, Swift won four awards, including Artist of the Year and Favorite Pop/Rock Female Artist. After the 2018 ceremony, Swift garnered a total of 23 awards, becoming the most awarded female musician in AMA history.</p>
    </div>
    <img src="https://static.wixstatic.com/media/4e5d9e_a9b691954d944c6498d51222aa7912b2~mv2.jpg/v1/fill/w_1146,h_1407,al_c,q_85,enc_auto/4e5d9e_a9b691954d944c6498d51222aa7912b2~mv2.jpg" alt="Album 2" />
  </div>
  <div className="album-item">
    <img src="https://static.wixstatic.com/media/4e5d9e_fe6480fd065349f5b6e53371d34d05b0~mv2.jpg/v1/fill/w_750,h_1162,al_c,q_85,enc_auto/4e5d9e_fe6480fd065349f5b6e53371d34d05b0~mv2.jpg" alt="Album 1" />
    <div className="album-description">
      <h3>Lover</h3>
      <p> In November 2018, Taylor signed a new multi-album deal with Universal Music Group and her subsequent releases would be promoted under the Republic Records imprint. The contract included a provision for her to maintain ownership of her masters recordings. Her seventh album would become the first studio album owned by Swift.
   Lover was released on August 23, 2019 and became Taylor’s sixth consecutive album to sell over 500,000 copies in its first week in the US, making Swift the first female artist to achieve this. All 18 songs from the album charted on the Billboard Hot 100 in the same week, setting a record for the most simultaneous entries by a woman. Lover was the world's best-selling solo studio album of 2019, selling 3.2 million copies. 
   The album earned multiple accolades, including 3 nominations at the Grammys, 3 VMAs and 6 AMAs. Swift also became the first female artist to win Artist of the Decade at the American Music Awards.
   Taylor starred as Bombalurina in the movie adaptation of Andrew Lloyd Webber's musical, Cats. She co-wrote and recorded an original song for the movie called "Beautiful Ghosts”, which would earn her another Golden Globe nod & a Grammy nomination at the 63rd Annual GRAMMY Awards.
   The documentary 'Miss Americana', which chronicles part of her life and career over the years, premiered at the 2020 Sundance Film Festival and was released on Netflix in January 2020. Miss Americana features the original song "Only the Young", which Swift wrote after the 2018 United States presidential elections. 
   During promotion for Lover in 2019, Swift became embroiled in a publicized dispute with manager Scooter Braun and her former label Big Machine regarding the acquisition of the masters of her back catalog. She stated she had been trying to buy the masters for years, but Big Machine only allowed her to do so if she exchanged a new album for an older one under another contract, which she chose not to sign. In October 2019, Swift's masters, videos and artworks were sold to Shamrock Holdings for a reported $300 million. Swift began re-recording her back catalog in November 2020 in an effort to own and be in control of her music and life’s work</p>
    </div>
  </div>
  <div className="album-item">
    <div className="album-description">
      <h3>folklore, evermore and re-recordings</h3>
      <p> On July 23, 2020, Swift surprise-announced she would be releasing her eighth studio album, folklore, at midnight. The album debuted at #1 on the Billboard 200 and became the year's longest-running no. 1, with 8 non-consecutive weeks at the top of the chart. The album’s lead single “cardigan” also debuted at #1. 
   Made in isolation during the COVID-19 pandemic, folklore was the result of a collaboration with long-time musical partner Jack Antonoff, Aaron Dessner, from The National, with whom Taylor had never worked before, and Bon Iver who are featured in one of the album’s tracks.
   In November 2020, Swift released the self-directed “folklore: the long pond studio sessions” on Disney+, a documentary in which Taylor, Aaron and Jack perform all the songs from the record while discussing the meanings and inspirations behind the album.
   Folklore earned Swift 5 nominations at the Grammys, including Album and Song of the Year. Taylor won the Album of the Year statue, becoming the first woman to win the Grammy’s highest honor three times.
   On December 10, 2020, Swift once again surprised her fans with the announcement of her ninth studio album and folklore’s sister record, evermore. The album was released on the 11th and continued Taylor’s collaborations with Aaron Dessner, Jack Antonoff and Bon Iver, as well as incorporated new artists into the “folkmore universe”, such as HAIM and The National. Both evermore and its lead single “willow” debuted atop of the Hot 100 and Billboard 200 charts. Having both sister albums achieve this feature, Swift became the first artist to debut at the top of both the singles and albums charts simultaneously twice.
   Folklore and Evermore embrace an indie folk and alternative rock production, a departure from Swift’s previous upbeat pop releases. Both albums sold over one million units worldwide in its first week and folklore broke the record for first-day album streams by a female artist on Spotify. 
   Taylor began working on the re-recordings of her first 6 studio albums in November of last year. The first release from this effort to own her catalog was the re-recording of her sophomore album Fearless, now Fearless (Taylor’s Version). It was released on April 9, 2021 and included 6 never before heard songs that didn’t make it into the album originally, besides the 20 tracks that had already been released in 2008 and 2009. Fearless (Taylor’s Version) debuted at #1 on the Billboard Hot 200, becoming Swift’s 9th consecutive album and the first re-recorded album in history to do so. 
   Taylor announced she will be releasing the re-recording of her 4th studio album, RED, on November 19, 2021.</p>
    </div>
    <img src="https://static.wixstatic.com/media/4e5d9e_61428aebad8c46bba3a280bb60f4a9c8~mv2.jpg/v1/fill/w_1198,h_2295,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4e5d9e_61428aebad8c46bba3a280bb60f4a9c8~mv2.jpg" alt="Album 2" />
  </div>
        </div>
        <div className="gallery-section" id="gallery-section">
  <h2>GALLERY</h2>
  <h3>Taylor has come a long way since her “Teardrops on My Guitar” days! Scroll through our gallery to see Taylor’s total transformation over the years.  </h3>
  <div className="gallery-cards">
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor01-3.jpg?fit=1000%2C1535&quality=86&strip=all" alt="Image 1" />
      <h1>2006</h1>
      <h4>Taylor first stepped on to the scene with her debut record, Taylor Swift</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor02-2.jpg?fit=1000%2C1457&quality=86&strip=all" alt="Image 2" />
      <h1>2007</h1>
      <h4>After releasing “Teardrops on My Guitar” as a single from her first album, Taylor started to become a household name.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor03-1.jpg?fit=1000%2C1392&quality=86&strip=all" alt="Image 1" />
      <h1>2008</h1>
      <h4>Her second album, Fearless was released.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor04.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 2" />
      <h1>2009</h1>
      <h4>She made an appearance in Hannah Montana: The Movie to sing her song “Crazier.”</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor05.jpg?fit=1000%2C1506&quality=86&strip=all" alt="Image 1" />
      <h1>2010</h1>
      <h4>Taylor dropped her third album Speak Now.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor06.jpg?fit=1000%2C1512&quality=86&strip=all" alt="Image 2" />
      <h1>2011</h1>
      <h4>As her fame continued to skyrocket, Taylor was named Billboard‘s Woman of the Year.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor07.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 1" />
      <h1>2012</h1>
      <h4>Her album Red was released.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor08.jpg?fit=1000%2C1535&quality=86&strip=all" alt="Image 2" />
      <h1>2013</h1>
      <h4>Throughout the year, she hit the stage on The Red Tour.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor09.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 1" />
      <h1>2014</h1>
      <h4>She had a supporting role in The Giver and released her 1989 album.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor10.jpg?fit=1000%2C1348&quality=86&strip=all" alt="Image 2" />
      <h1>2015</h1>
      <h4>Not only did Taylor hit the road on The 1989 World Tour, but she released a concert movie for the show.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor11.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 1" />
      <h1>2016</h1>
      <h4>She kicked of her long-term romance with Joe Alwyn.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/02/taylor-wsfit06.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 2" />
      <h1>2017</h1>
      <h4>She kicked off her Reputation era.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/taylor12.jpg?fit=1000%2C1426&quality=86&strip=all" alt="Image 1" />
      <h1>2018</h1>
      <h4>After the album release, Taylor embarked on the Reputation Stadium Tour</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2019/11/celebrities-with-original-christmas-songs-21.jpg?fit=1000%2C1471&quality=86&strip=all" alt="Image 2" />
      <h1>2019</h1>
      <h4>Her album Lover was released in August of this year.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2020/12/taylor-evermore-2.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 1" />
      <h1>2020</h1>
      <h4>Taylor’s Netflix documentary Miss Americana was released along with two surprise albums — Folklore and Evermore.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2021/11/Taylor-jake02.jpg?fit=1000%2C1336&quality=86&strip=all" alt="Image 2" />
      <h1>2021</h1>
      <h4>Along with her re-released albums Fearless (Taylor’s Version) and Red (Taylor’s Version), Taylor also directed a short film for a 10-minute version of “All Too Well.”</h4>
    </div>
    <div className="gallery-card">
      <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2019324/rs_634x1024-190424152555-634x1024-taylorswift-gj-4-24-19.jpg?fit=around%7C776:1254&output-quality=90&crop=776:1254;center,top" alt="Image 1" />
      <h1>2022</h1>
      <h4>Taylor released her album Midnights on October 21, which pretty much broke every record an album could possibly break.</h4>
    </div>
    <div className="gallery-card">
      <img src="https://www.j-14.com/wp-content/uploads/2023/10/GettyImages-1823197034.jpg?fit=1000%2C1500&quality=86&strip=all" alt="Image 2" />
      <h1>2023</h1>
      <h4>2023 might’ve been Taylor’s biggest year yet. Kickstarting her legendary Eras Tour, releasing Speak Now (Taylor’s Version), 1989 (Taylor’s Version), her record-breaking concert film and of course, being named TIME’s Person of the Year</h4>
    </div>
  </div>
</div>
{/* <div className="videos-section" id="videos-section">
      <div className="video-container">
        <iframe
          width="860"
          height="515"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div> */}
    <div className="awards-section" id="awards-section">
    <h2>AWARDS</h2>
  <h3>So as she gets set to add to her achievements, here's a look at all the awards Taylor has won from Grammy Awards to MTV and even Guinness World Records  </h3>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629101?crop=16_9&width=660&relax=1&format=webp&signature=VmRbzHa_vuzuU2ugXAG4o9tLdzE=" alt="Awards" />
        <div className="awards-text">
          <h2>Grammy Awards</h2>
          <p>A Grammy Award is what every successful musician wants and luckily for Taylor, she has quite the collection of them. To be precise, she has 14 to boast about!</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629105?crop=16_9&width=660&relax=1&format=webp&signature=lwet0M6idQQL5TXcBV_oYPyi1EE=" alt="Awards" />
        <div className="awards-text">
          <h2>Billboard Music Awards</h2>
          <p>The Billboard Music Awards is a great event, especially if your name is Taylor Swift! She has won an award (or more) for every year of her career except for 2017</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629106?crop=16_9&width=660&relax=1&format=webp&signature=pq8wu4WxQaPw7UuyMITVjjDMVJQ=" alt="Awards" />
        <div className="awards-text">
          <h2>MTV Awards</h2>
          <p>There's plenty of different types of MTV Awards and Ms.Swift has pretty much won at all of them over the years.</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629108?crop=16_9&width=660&relax=1&format=webp&signature=pWhnXqLiKNJ9AnOR4CryEI-I9VI=" alt="Awards" />
        <div className="awards-text">
          <h2>Music Association Awards</h2>
          <p>Starting her career in country music, and with it being so close to her heart, it's no surprise Taylor has also won awards in this area too.</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629114?crop=16_9&width=660&relax=1&format=webp&signature=mUX3ejD8fBmMSwXJnsSnkdjQW5s=" alt="Awards" />
        <div className="awards-text">
          <h2>American Music Awards</h2>
          <p>We can only imagine Taylor's awards collection at this point and when you look at all her achievements at the AMA's, we're pretty sure she has to store them all in their own room.</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629115?crop=16_9&width=660&relax=1&format=webp&signature=fEeFKGHhe_6IsgDmJQ_phtv0WbI=" alt="Awards" />
        <div className="awards-text">
          <h2>Brit Awards</h2>
          <p>aylor may not be an actual Brit but that hasn't stopped her from winning awards this side of the globe too.</p>
        </div>
      </div>
      <div className="awards-content">
        <img src="https://imgs.capitalfm.com/images/629118?crop=16_9&width=660&relax=1&format=webp&signature=vGEEVx7J_jaYJGR7qnNOURGQ51k=" alt="Awards" />
        <div className="awards-text">
          <h2>Guinness World Records</h2>
          <p>Prepare yourselves Swift fans as this is a serious number! Taylor, who has one hit album after another, has broken a total of 92 Guinness World Records so far.</p>
        </div>
      </div>
    </div>
    <div className="inspire-section"></div>
    <div className="legacy-section" id="legacy-section">
  <h1>LEGACY</h1>
    <h1>Experts weigh in on her fanbase loyalty, skills as songwriter, businesswoman as her albums, tours break financial, popularity records</h1>
    <p>
    Whether you’re a fan of Taylor Swift or not, it’s hard to deny the cultural and financial juggernaut the pop superstar has become this year. Her album “Midnights,” released in late 2022, was the year’s top-seller at 1.8 million copies, twice that of the second-biggest by Harry Styles. Her latest, “Speak Now (Taylor’s Version),” debuted in July at No. 1, giving Swift her 12th in the top spot, surpassing Barbra Streisand for the most No. 1 albums by a woman artist.</p>
   <p> Swift’s 131-date “Eras” world tour, currently packing stadiums across the U.S., is on track to be the highest-grossing concert tour of all time, at $1.4 billion, when it ends next year. Analysts estimate the tour will also have a total economic impact from tour-related spending of $5 billion on host cities. Even the Federal Reserve noted the effect her tour is having on regional economies.
    </p>
    <h1>‘Very few people have her songwriting talent’</h1>
    <h2> - Stephanie Burt, poet and Donald P. and Katherine B. Loker Professor of English</h2>
    <h1>4 albums in Billboard top 10</h1>
    <div className="inspire1-section"></div>
    {/* image */}
    <p>Taylor Swift is the only living artist to have four albums in the Billboard top 10 at the same time since Herb Alpert in 1966. Following his death in 2016, Prince had five albums in the top 10. (Swift is the only woman with four albums in the top 10 at the same time since the Billboard 200 was combined from its previously separate mono and stereo album charts into one all-encompassing list in August of 1963.)

    Source: Billboard</p>

    <h1>‘Strong social and emotional bond that people feel with her’</h1>
    <h2> - Alexandra Gold, clinical fellow in psychology at MGH and Harvard Medical School</h2>
    </div>
        <footer className="App-footer">
        <p>
          Created with <span role="img" aria-label="heart">❤️</span> by PRACHII
        </p>
      </footer>
      
    </div>
  );
}

export default App;
