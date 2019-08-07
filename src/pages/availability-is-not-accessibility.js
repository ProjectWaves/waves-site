import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import { AppWrapper } from '../components/elements/layout-components';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const AvailabilityIsNotAccessibilityPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          {/* <Header /> */}
          <main
            css={css`
              max-width: 60%;
              margin: 4rem auto;

              @media only screen and (max-width: 1000px) {
                max-width: 100%;
              }

              h2 {
                color: #000;
                font-size: 4rem;
              }

              p {
                color: #000;
                font-size: 2rem;
                line-height: 3.75rem;
              }
            `}
          >
            <div>
              <p>
                Foam, spoon, turkish, breve cup as coffee lungo instant spoon
                single origin decaffeinated crema chicory decaffeinated breve
                irish cultivar chicory irish aftertaste. Turkish filter, single
                shot percolator medium decaffeinated, cinnamon brewed, spoon
                skinny latte sweet, qui sweet, trifecta aged iced, to go blue
                mountain decaffeinated medium iced. Lungo java a trifecta, et
                doppio french press caffeine carajillo cinnamon latte, dark in
                flavour dripper affogato grounds caramelization acerbic. Aged ut
                turkish cinnamon grounds sweet iced kopi-luwak trifecta, et,
                sweet, plunger pot as mug body frappuccino grounds. That a cup
                filter, instant espresso chicory, frappuccino seasonal so,
                aromatic siphon extraction brewed so ristretto black. Trifecta,
                frappuccino irish, affogato siphon, aroma, con panna grinder
                macchiato, redeye strong, lungo mocha cortado cinnamon cultivar.
                Qui seasonal sit cappuccino barista cortado, grounds flavour,
                saucer est kopi-luwak in acerbic espresso blue mountain, so
                filter organic body dripper barista viennese aged.
              </p>
            </div>
            <div>
              <p>
                Trifecta, beans froth foam latte instant, breve kopi-luwak
                ristretto, grinder, and, viennese caramelization cup strong
                sweet cup beans. Skinny et, organic, mug ristretto cortado,
                coffee black, aged coffee in viennese, java affogato single
                origin rich java. Coffee caffeine, single origin, mocha,
                affogato coffee trifecta percolator, macchiato aftertaste, con
                panna, robust to go and pumpkin spice, ristretto aroma as
                robusta affogato. Cream espresso brewed whipped crema aftertaste
                sugar brewed in, white fair trade sugar latte, crema cortado
                carajillo body mocha aged espresso. Skinny carajillo, brewed,
                seasonal so milk caffeine crema, mazagran kopi-luwak arabica eu,
                in bar, spoon so seasonal, pumpkin spice at robusta frappuccino
                coffee. As, ristretto mocha, aroma sweet affogato, aroma rich
                con panna dark, spoon, iced cup strong single origin acerbic
                variety sugar coffee blue mountain aroma. Carajillo acerbic
                grounds crema, a sit beans skinny dripper chicory so skinny
                doppio, spoon saucer extraction et milk et spoon americano
                seasonal.
              </p>
            </div>
            <div>
              <p>
                Variety fair trade decaffeinated, aftertaste americano robusta
                kopi-luwak viennese lungo barista body white extra affogato et
                strong. Rich decaffeinated mazagran, fair trade, café au lait
                dark siphon beans, single shot sit, in seasonal trifecta blue
                mountain, beans cup ut sit extra latte. Filter, organic chicory
                barista, french press, so, chicory a body mug seasonal froth,
                latte breve est, et half and half aroma dripper cinnamon blue
                mountain. Cultivar mocha fair trade cream, sweet cup organic
                body, steamed cortado, mazagran caramelization, in extra est
                flavour body chicory. Extra qui wings variety frappuccino,
                percolator, shop bar crema caffeine viennese skinny extraction
                aftertaste, sugar, dripper, café au lait variety a mocha blue
                mountain variety. Aromatic fair trade, ut brewed irish as,
                viennese, seasonal sit irish body crema espresso, in and doppio
                lungo grinder chicory steamed seasonal. Rich, froth brewed shop
                robusta seasonal, breve irish grounds, seasonal, french press,
                that, frappuccino aftertaste, coffee mug, espresso, crema siphon
                aftertaste shop robusta sugar brewed.
              </p>
            </div>
            <div>
              <p>
                Extra turkish, instant, white aroma, french press, aged acerbic,
                flavour, caramelization lungo, espresso crema cultivar variety
                single origin. Skinny, aromatic single shot iced grounds dripper
                flavour sit doppio irish milk dark, mocha, mug sweet extra body
                grinder skinny sweet to go eu wings. Café au lait frappuccino,
                spoon aged, turkish, espresso caffeine medium trifecta, variety,
                cream, steamed, barista shop, latte milk crema, barista brewed
                filter redeye white. Grinder, percolator caramelization
                trifecta, fair trade whipped, filter grounds cream, single shot
                galão cup as carajillo doppio eu foam. Caffeine, java cup
                cappuccino frappuccino single shot to go plunger pot, crema
                single shot, rich, filter, carajillo irish extra instant,
                viennese robusta whipped spoon grounds. At brewed beans white
                whipped galão, and irish, cream redeye percolator white mazagran
                grounds americano. Coffee variety, qui, robusta qui, id cultivar
                chicory cinnamon grinder galão, est, frappuccino black galão
                flavour cream extra filter coffee organic milk blue mountain.
              </p>
            </div>
            <div>
              <p>
                Steamed, extraction, cappuccino affogato ristretto acerbic cup
                turkish, cinnamon pumpkin spice latte dark, con panna robust
                seasonal, froth, decaffeinated as id, cinnamon latte cinnamon
                americano dripper. Milk, whipped qui a turkish cup extraction
                flavour robusta fair trade mocha roast variety. Café au lait,
                brewed extra affogato coffee carajillo chicory aged so white
                aromatic that pumpkin spice chicory. Café au lait cream siphon,
                est aged id variety americano est, robusta aroma trifecta blue
                mountain cup, spoon frappuccino decaffeinated extra cappuccino
                viennese con panna filter. Kopi-luwak rich, siphon flavour
                french press arabica flavour, bar doppio, organic caramelization
                americano so brewed. Arabica latte macchiato extra turkish
                flavour, instant, cultivar barista cortado breve aroma irish
                affogato redeye arabica. Caramelization rich french press, blue
                mountain caffeine café au lait galão sit cup eu caffeine white
                acerbic that affogato sweet flavour dark whipped grinder.
              </p>
            </div>
            <Waypoint
              debug
              scrollableAncestor={window}
              topOffset="20%"
              onEnter={() => console.log('waypoint has been entered')}
              onLeave={() => console.log('waypoint has been left')}
            />
            ;
            <div>
              <p>
                Milk americano extra, as, mocha, chicory organic extraction est
                bar at white aftertaste, ristretto, to go mocha kopi-luwak
                percolator aged doppio robusta. Instant barista beans robust
                crema so java in percolator macchiato viennese mug doppio
                variety beans. Sweet wings arabica lungo, id whipped, skinny con
                panna fair trade arabica turkish aroma turkish aftertaste.
                Decaffeinated saucer cappuccino, bar crema foam in, variety,
                viennese sit sugar instant qui carajillo. At caramelization
                sugar aged, mazagran, caffeine, crema rich in, mug, pumpkin
                spice sit ristretto viennese fair trade at black irish. Aroma
                con panna mug con panna white flavour id flavour, sweet cup,
                americano rich, redeye to go carajillo spoon froth con panna in
                percolator. Ut white iced skinny redeye black skinny iced,
                single origin, irish latte to go half and half sugar mazagran,
                fair trade, froth seasonal, caffeine carajillo french press iced
                grounds caffeine.
              </p>
            </div>
            <div>
              <p>
                Est ristretto, and, percolator whipped, doppio brewed, instant,
                mug instant, percolator and fair trade, qui lungo body aromatic
                blue mountain cultivar ristretto. Turkish, cultivar cortado,
                acerbic bar macchiato mocha single shot ut sweet crema dripper
                id cup carajillo. Sit, siphon filter, at that, beans,
                frappuccino black coffee at dripper that coffee con panna. Beans
                extra steamed decaffeinated, frappuccino blue mountain organic,
                ristretto, cinnamon filter americano turkish arabica variety.
                As, barista carajillo, caffeine latte, black, fair trade grinder
                extra et id acerbic spoon extra galão. Beans single origin black
                ristretto et filter saucer viennese grinder, organic cup robust
                mazagran shop mocha milk aroma. Plunger pot, steamed, instant,
                dripper aroma, cappuccino espresso, doppio robusta whipped
                trifecta, froth steamed kopi-luwak et instant cinnamon, that, et
                shop beans cup kopi-luwak.
              </p>
            </div>
            <div>
              <p>
                Bar dripper coffee strong organic ut, crema, caramelization and
                saucer coffee organic sweet. Steamed blue mountain fair trade,
                turkish doppio black sugar froth cup, grinder, sugar, crema, ut
                organic rich aroma to go bar frappuccino chicory. Black affogato
                galão dark, single origin, breve id doppio barista ristretto
                beans sit doppio. Est caramelization a carajillo eu coffee
                caffeine, froth espresso variety, beans aroma galão grinder café
                au lait. Qui, white, extra organic, lungo, blue mountain
                cappuccino, kopi-luwak in trifecta cinnamon mocha, decaffeinated
                strong aftertaste organic, chicory shop espresso arabica so
                saucer carajillo con panna. Cinnamon cultivar espresso grinder,
                irish mug as dripper, grounds turkish blue mountain sit affogato
                americano, lungo crema affogato caffeine a frappuccino. Cortado,
                a shop, beans eu decaffeinated crema cup con panna whipped
                grinder single origin foam.
              </p>
            </div>
          </main>

          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default AvailabilityIsNotAccessibilityPage;
