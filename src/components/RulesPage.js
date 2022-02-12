import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function RulesPage() {
  return (
    <>
      <Header active="rules" />
      <div className="flex flex-col items-center justify-center text-center dark:bg-gray">
        <div className="flex flex-col items-center justify-center w-2/3 text-white">
          <h1 className="m-5 text-5xl font-black">Rules and Regulations</h1>
        <h2 className="mb-2 text-3xl font-bold underline">
            SECTION 1 - BASICS
          </h2>
        <div className="flex flex-col flex-wrap items-center justify-center">
          <div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 1 - MEMBERSHIP</h3>
          <p>Roles &amp; Responsibilities</p>
          <p>The league will be constituted as follows:</p>
          <p>
            Commissioner &nbsp;(Quantity: 1) - Responsible for ownership of the
            league in Madden. Helps ensure Admins are running the league in a
            fashion that&rsquo;s consistent with league votes and constitution.
          </p>
          <p>
            Administrator &nbsp;(Quantity: 4) - Appointed Position. Responsible
            for managing day to day of the league
          </p>
          <p>
            Team Coach &nbsp;(Quantity: 27) - Follow the rules and guidelines in
            this document. Be awesome.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 2 - JOINING</h3>
          <p>
            Isle of Madden &rsquo;s waitlist is not guaranteed to be cleared via
            seniority. When filling spots, we will take into consideration the
            following: Chat activity, previous CFM experience, references, etc.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 3 - TRANSPARENCY</h3>
          <p>
            It is the opinion of the league&rsquo;s forming body that league
            votes should be as transparent as possible.
          </p>
          <p>
            Admins will be made to account for their leadership styles, it will
            also be expected that they are treated with respect at all times.
            Any edits to players by in-game admins will be recorded and posted
            to #record-keeping to ensure complete transparency.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 4 - RULE CHANGES</h3>
          <p>
            We want to allow the league to have a choice in its own direction
            while also respecting the intended goals of sim gameplay that we
            have set out to create here at the Isle of Madden. In pursuit of
            that goal, rule changes are allowed on league votes that will be
            brought about by conversations in #rules-discussion.
          </p>
          <p>Requirements for changes to the rulebook will be as follows:</p>
          <p>New rule: &nbsp;Simple majority. 17 of 32 owners</p>
          <p>
            Modification of an existing rule: &nbsp;Supermajority. 20 of 32
            owners
          </p>
          <p>Only team owners will vote on rule changes.</p>
          <p>
            Admins will reserve the right to direct certain new rules and rule
            changes on a trial basis (either 4/6/8 games) at the end of which we
            will vote whether to keep the change with a simple majority being
            required to confirm the change permanently.
          </p>
        </div>
        <h2 className="mb-2 text-3xl font-bold underline">
            SECTION 2 - CODE OF CONDUCT
          </h2>
        <div className="flex flex-col flex-wrap items-center justify-center">
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 1 - REPORTING</h3>
          <p>
            Anyone can report a player for breaking a league rule using{" "}
            <a href="https://www.google.com/url?q=https://forms.gle/5gdzRmT741yTEtEA8&amp;sa=D&amp;source=editors&amp;ust=1642722677816218&amp;usg=AOvVaw0Acjkr6HkU7JaI_e7oeDif">
              this form.
            </a>
            &nbsp;
          </p>
          <p>You must provide at least one of the following:</p>
          <p>
            Screenshots&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Timestamps
            from streams&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clips
            from streams
          </p>
          <p>
            Reports filed using the above-linked form will be sent to the admins
            for processing. Reports that fail to provide sufficient information
            are not guaranteed to be looked at by the league. You will receive
            notice if that is the case and be allowed to resubmit with
            appropriate information.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 2 - GENERAL CONDUCT</h3>
          <p>
            Friendly trash talk and back and forth conversations about games
            that have or will be played are generally acceptable. If one player
            is no longer participating in the conversation, the other is
            expected to let the conversation end.
            <br />
            <br /> The following are never acceptable:
          </p>
          <p>Racial Slurs</p>
          <p>Personal attacks, including commentary on family members</p>
          <p>
            Verbal abuse in general - If you have to ask, it&rsquo;s likely not
            okay
          </p>
          <p>
            Quitting games is never acceptable and will not be tolerated . This
            can result in any penalty, up to and including banishment &nbsp;from
            the league on the first occurrence.
          </p>
          <p>
            Actions done in other leagues will be held against you in the Isle
            of Madden. Please act appropriately while in other Discords.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 3 - PENALTIES</h3>
          <p>GENERAL CONDUCT</p>
          <p>
            Penalties for violations of general conduct can potentially be made
            at the moment of an administrator&#39;s judgment. While penalties
            for conduct typically abide by the following guidelines, they can go
            all the way up to banishment on the first offense in extreme cases.
            Attacks on others will not be tolerated.
          </p>
          <p>
            1st offense: &nbsp;Warning to temporary mute based on the nature of
            the offense
          </p>
          <p>
            2nd offense: &nbsp;Temporary mute to banishment based on the nature
            of the offense
          </p>
          <p>IN-GAME CONDUCT</p>
          <p>
            All penalties for in-game conduct will take place after the 24-hour
            appeals window has passed, and may be delayed further for any
            appeals that are granted.
          </p>
          <p>
            1st offense: Typically, only a warning, depending on the nature of
            the offense
          </p>
          <p>2nd offense: &nbsp;Suspension of player and/or coach for 1 week</p>
          <p>
            3rd offense: &nbsp;Suspension of player for multiple weeks based on
            the infraction
          </p>
          <p>
            Suspended players will be manually moved down the depth chart by the
            coach for the duration of their suspension to ensure they will not
            end up playing meaningful snaps in-game.
          </p>
          <p>
            All warnings and formal suspensions will be posted in our discipline
            channel so the entire league can see these updates.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 4 - APPEALS PROCESS</h3>
          <p>
            There is a hope that a thorough review process by Admins yields fair
            judgments. However, players are allowed to{" "}
            <a href="https://www.google.com/url?q=https://forms.gle/7nTEMzNrzHWiv7LS6&amp;sa=D&amp;source=editors&amp;ust=1642722677819785&amp;usg=AOvVaw1-iBBSSVL1ZeaKirnvhQbr">
              appeal
            </a>
            &nbsp;a penalty by notifying the admins within 24 hours.
          </p>
          <p>
            A result will be returned within a day. Methods for returning a
            judgment can include league vote or admin vote.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 5 - SCHEDULING</h3>
          <p>Advance Schedule: Tuesday, Thursday and Sunday @ 11:59 PM EST</p>
          <p>
            All coaches must use Discord to communicate within the league either
            through the web or mobile app.
          </p>
          <p>
            Coaches are required to contact their respective opponent within the
            first 18 hours after advance. Anyone failing to do so is subject to
            losing via a force sim if the opposing owner has reached out to them
            within that 18-hour window and the game cannot be scheduled before
            the next advance.
          </p>
          <p>
            BE EXPLICIT &nbsp;when describing availability. It should take no
            more than a couple of messages for two owners to figure out when/if
            they can play. Once you have a set gametime, you need to show for
            that game time. If you do not show (with no reasonable notice) the
            other team may end up taking a forced win if the game cannot be
            rescheduled. These situations will be looked at by administrators.
          </p>
          <p>
            If both owners reach out to each other in the 18-hour window but the
            game is still not able to be scheduled, it will be a fair sim unless
            one owner&#39;s availability is significantly lacking. This will be
            a judgment call made by the admin team and will require screenshots
            of scheduling conversations between owners
          </p>
          <p>
            If you have a vacation coming up, please let an admin know
            beforehand, as well as your opponents so they know they can take it
            easy that week.
          </p>
          <p>
            Please be active regarding scheduling and playing your games.
            Failure to do so may result in removal from the league at the
            discretion of league administrators.
          </p>
        </div>
        <h2 className="mb-2 text-3xl font-bold underline">
            SECTION 3 - GAMEPLAY RULES
          </h2>
        <div className="flex flex-col flex-wrap items-center justify-center">
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 1 - GENERAL</h3>
          <p>STREAMING</p>
          <p>
            Games are all required to be streamed through one of the streaming
            platforms (Twitch, YouTube, Facebook) or they can be recorded
            locally then uploaded to YouTube within 24 hours of completion of
            the game and shared to league media. &nbsp;
          </p>
          <p>BOTH &nbsp; teams are required to stream their games.</p>
          <p>
            <br />
            Recording Dev Stories &nbsp;Coaches must record &nbsp;the dev
            stories of their players if they would like their player fixed due
            to an error on Madden&#39;s side or a scheduling issue with your
            opponent. Failure to have a recording will cause no dev upgrade due
            to a Madden error or no dev story carryover due to scheduling
            issues.
          </p>
          <p>
            Coaches in the Isle of Madden are expected to play a simulation
            style of football, and dev stories are expected to be completed
            using sim game-play. In addition to normal disciplinary action for
            un-sim gameplay, any dev story that was completed through un-sim
            behavior may be reversed if the admin team deems it appropriate.
          </p>
          <p>&nbsp;</p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 2 - PLAYCALLING</h3>
          <p>OFFENSE</p>
          <p>
            You must have a minimum of 10 rushing attempts (Designed QB Run
            count, QB scrambles do not) and 10 pass attempts (sacks would count
            as a pass attempt) per game
          </p>
          <p>
            If coaches do not reach 10 rush attempts in the future they will
            face a QB suspension.
          </p>
          <p>
            If coaches do not reach 10 pass attempts in the future they will
            face a RB suspension.
          </p>
          <p>
            Note: Consideration will be given to teams that were trailing for a
            significant portion of the game, low play count, or a new coach to
            the Isle Of Madden.
          </p>
          <p>
            Keep QB runs to a realistic amount. They should not lead your team
            in yards and attempts every game.
          </p>
          <p>
            No instant scrambling. Coaches are expected to stay in the pocket
            after the snap for a reasonable timeframe. Obvious blitzes or
            pressure allow for a scramble if necessary.
          </p>
          <p>
            No Zig Zagging back and forth allowed (rapidly switching directions
            with a ball carrier to evade defenders - changing constant direction
            with the left joystick).
          </p>
          <p>
            Example:
            <a href="https://www.google.com/url?q=https://streamable.com/5omahz&amp;sa=D&amp;source=editors&amp;ust=1642722677823261&amp;usg=AOvVaw3Vs_AMt4X3PtsC4t339waQ">
              https://streamable.com/5omahz
            </a>
          </p>
          <p>
            Quick snapping while the defense is in motion, as it currently
            stands in Madden, offensive motion can cause the defense to swap
            assignments, forcing defenders to swap sides of the field pre-snap.
            &nbsp;Since users cannot prevent this from happening, offenses are
            not allowed to snap the ball until the AI defenders have reset.
            &nbsp;If the defense has not reset before the play clock expires,
            the offense may take a timeout or either take a delay of game
            penalty. The defense must decline this penalty and the game may
            continue as regular.
          </p>
          <p>
            Inside Zone Rule - coaches must run between the tackles on running
            plays that are designed to go down the middle. Once the coach has
            gone through a hole (between the tackles) there are no restrictions
            on player movement.
          </p>
          <p>PLAY ACTION</p>
          <p>NO Play Action allowed on 3rd and 8 or more</p>
          <p>&nbsp; Coaches cannot Hot Route the RB out of a Play Action set</p>
          <p>
            Coaches may cancel out of play actions but MUST throw the ball away.
            All play-action handoffs must be followed through until completion
            if the coach intends to pass the ball.
          </p>
          <p>DEFENSE</p>
          <p>Mix up your Zone and Man Defense calls.</p>
          <p>
            There must be a minimum of THREE defenders rushing the passer on
            each play.
          </p>
          <p>Nano Blitzes are NOT allowed.</p>
          <p>
            These are usually defined as specific formations and/or specific
            adjustments that guarantee a defender&rsquo;s path for a sack.
          </p>
          <p>
            Manual Contain/Blitz adjustments need to be one or the other. You
            may not use both on the same defensive play.
          </p>
          <p>
            Safeties cannot be subbed into any LB or SUB LB positions on defense
            unless they are 86 Speed or less. If safeties start the season with
            86 speed &nbsp;and get a speed upgrade, they are allowed to stay in
            SUBLB until the end of the season.
          </p>
          <p>PACE OF PLAY</p>
          <p>
            <br />
            Keep hurry-up offenses to a reasonable level. You should not do more
            than 3 no huddles in a row unless you are short on time.
          </p>
          <p>
            Chewing clock is acceptable within the following windows:
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final 2 minutes of
            the first half
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final 3 minutes of
            the second half
          </p>
          <p>
            If you feel as though someone in the league is abusing the grey area
            that the pace of play rules allow, please report the player using{" "}
            <a href="https://www.google.com/url?q=https://forms.gle/5gdzRmT741yTEtEA8&amp;sa=D&amp;source=editors&amp;ust=1642722677826373&amp;usg=AOvVaw1i0eM5Rv0ghhMokIbL9gpQ">
              this form.
            </a>
          </p>
          <p>&nbsp; PRE-SNAP AUDIBLES, MOTION, AND HOT ROUTES</p>
          <p>
            &nbsp;Coaches on offense are limited to 2 hot routes per play.
            MANUAL motions count towards this limit, but changing a player to
            block will no longer count towards the hot route limit, and smart
            routing will still not count towards the limit.
          </p>
          <p>
            &nbsp;If you manually motion a player they must be set before you
            can snap the ball.
          </p>
          <p>&nbsp; 4TH DOWN</p>
          <p>
            The JoshuaBizant Gambit - Coaches may now go for it once per half on
            4th down from anywhere on the field. We are trusting coaches to use
            this gambit wisely and not in the first quarter at your own 15-yard
            line. The gambits can not be banked - if you do not use it in the
            first half it does not carry over to the second half. Gambits should
            only be used if you believe that you are in a good position to use
            them.
          </p>
          <p>Coaches may go for it one time anywhere while losing.</p>
          <p>
            Coaches are allowed to go for it on 4th and 4 or less past the
            50-yard line.
          </p>
          <p>
            Coaches may go for it anywhere when down 21+ in the 3rd quarter or
            10+ in the 4th quarter
          </p>
          <p>MERCY RULES</p>
          <p>Be proactive about protecting your players in blowouts.</p>
          <p>
            Please reach out to your opponent via DM for games that are at or
            beyond 28 points entering the second half to see if your opponent
            would like you to chew the clock.
          </p>
          <p>
            Mandatory forced chew - If you are up 35 points or more in the 3rd
            quarter, &nbsp;you MUST chew the clock and remove starters. If your
            opponent scores making it less than 35 then you need to stop chewing
            and replace starters. Starters can be adjusted in the depth chart to
            prevent pauses from being used.
          </p>
          <p>
            Games that are 29 points or more as the 4th quarter begins, and 21
            points or more inside the last 2 minutes should not see starters on
            the winning team accruing statistics.
          </p>
          <p>
            When up multiple scores and approaching the mercy rules territory,
            recognize that players should not be accruing lots of stats. This is
            called stat padding and will result in the suspension of a player.
            If you are chewing the clock, you should not be passing the ball
            deep, accruing stats for your players, and getting touchdowns. Use
            your common sense, if you are unsure than reach out to the admin
            team.
          </p>
          <p>GRIEFING</p>
          <p>
            There will be no tolerance for griefing. Delays of game, offsides,
            pauses, and timeouts all happen within the course of the game,
            however, if you are found to be abusing the flow of the game for
            griefing your opponent you will be subject to ejection from the
            league.
          </p>
          <p>SPECIAL TEAMS</p>
          <p>
            No moving blockers pre-snap on any type of return other than
            mentioned below.
          </p>
          <p>
            You are allowed to manually user a blocker pre-snap to help prevent
            a possible fake on punts and field goals. Players should not be
            moved more than 5 yards away from the line of scrimmage. Once the
            ball is in the air you must switch to the returner and not use the
            blocker manually.
          </p>
          <p>
            The kicking-off team is allowed to change off of the kicker to
            attempt to make the tackle. The receiving coach should not be moving
            blockers before their returner has the ball. Once the receiving
            coach has the ball they may continue as normal for a kick-off
            <br />
            <br />
            UNIFORMS
          </p>
          <p>
            The home &nbsp;team has the right to decide their uniforms first.
          </p>
          <p>
            Teams&rsquo; uniforms must be contrasting in color, and preferably
            white and colored.
          </p>
          <p>
            If either team objects to the contrast of the jerseys they must say
            so before the opening drive.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 3 - DISCONNECTS</h3>
          <p>We want coaches to work disconnects out.</p>
          <p>
            If the players cannot agree, an admin will look at the game on a
            case-by-case basis and help mediate.
          </p>
        </div>
        <h2 className="mb-2 text-3xl font-bold underline">
            SECTION 4 - TEAM MANAGEMENT
          </h2>
        <div className="flex flex-col flex-wrap items-center justify-center">
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 1 - TRADE COMMITTEE</h3>
          <p>
            The TC&rsquo;s goals when approving trades will be to ensure league
            members are:
          </p>
          <p>
            -Making trades that serve their long term goals
            <br />
            -Not colluding in negotiations
            <br />
            -Considering cap ramifications in trades
          </p>
          <p>
            TC members will be expected to provide unbiased advice to newer
            members to expand knowledge of roster management league-wide and
            increase the future likelihood of roster parity.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 2 - ROSTER /COORDINATOR MANAGEMENT</h3>
          <p>
            Each team must maintain a 5 2-man roster by Week One of the regular
            season.
          </p>
          <p>
            Each team must carry a minimum of: &nbsp; 2 QB, 3 RB, 7 OL, 5 DL, 5
            LB, 4 S, 5 CB&rsquo;s
          </p>
          <p>
            Practice squad stealing is allowed. Players must be signed to your
            active roster and not moved to your practice for the remainder of
            the season.
          </p>
          <p>
            Coaches are only allowed to have 8 Superstar/X-Factors on their
            team. &nbsp;They must meet this requirement by Week 1 of the season.
            If you gain a superstar or x-factor during the season, you do not
            need to go back down to 8 until the following season&rsquo;s Week 1.
          </p>
          <p>
            The firing of Offensive and Defensive coordinators is no longer
            allowed. Due to issues with Madden and EA, you are not allowed to
            fire your coordinators. If you would like to reset your coaching
            tree you can use the in-game ability to reset it once per season
          </p>
          <p>
            Rerolls are available to coaches once per season. They can use it on
            any player* to re-roll a superstar ability. Re-rolls do not
            carryover.
          </p>
          <p>*A player may only be re-rolled once per Madden.</p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 3 - POSITION CHANGES</h3>
          <p>Upgrade to Superstar by overall</p>
          <p>
            Offensive lineman that hit the overall of 87 will be upgraded to
            Superstar dev if not already there.
          </p>
          <p>
            Any player that reaches the overall of 95 or higher and is not
            already at Superstar dev will be automatically upgraded to
            Superstar.
          </p>
          <p>Superstar/XF Changes</p>
          <p>
            Players who are Superstar or XF development trait changes must be
            approved by the admin
          </p>
          <p>
            You may only request to change the player position with this
            development trait only once during the pre-season each year
          </p>
          <p>
            They may play out of position on the depth chart following all other
            Isle of Madden rules
          </p>
          <p>
            OLB/DE changes will be approved by the admin team on a case-by-case
            basis and are limited to a 1-time change per player per coach.
          </p>
          <p>
            Any coach found changing a SS/XF player&rsquo;s position outside of
            approval will be subject to heavy discipline and possible removal
            from the league. If you are unsure, check with an admin .
          </p>
          <p>Allowed Changes:</p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Offensive Linemen are
            interchangeable (ex: LT to LG, C, RG or RT)
          </p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Linebackers are
            interchangeable (ex: ROLB to LOLB, MLB)
          </p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Safeties are
            interchangeable (FS to SS and vice versa)
          </p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TE to FB - Player must
            weigh at least 235lbs and have LBK of 70
          </p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DE to DT - Player must
            be 280+ plus in 4-3 def and 295+ in 3-4 def
          </p>
          <p>&middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DT to DE</p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; LB to DE (Must be
            speed/pass rushing archetype linebacker and weigh 250+)
          </p>
          <p>&middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DE to OLB</p>
          <p>
            . &nbsp; &nbsp; CB to Safety - player fall within the below
            category.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speed: 88 or below{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tackle 72 and above
          </p>
          <p>
            . &nbsp; &nbsp; S to CB - player falls within the below category.
            <br />
            <br />
            74+ Man and Zone Coverage <br />
            81 and below hit power
            <br />
          </p>
          <p>Disallowed Changes:</p>
          <p>&middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; QB to anything</p>
          <p>&middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WR to anything</p>
          <p>&middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; HB to FB</p>
          <p>&middot; &nbsp; &nbsp; K to P (and vice versa)</p>
          <p>
            Any coach caught changing positions of players that do not meet
            specific criteria will be subject to discipline. If you are unsure,
            check with an admin.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 4 - TRADE RULES</h3>
          <p>Trades are submitted using this google form.</p>
          <p>
            Coaches will have 3 trades to use during the regular season and 4
            during the off-season.
          </p>
          <p>
            Trades with players that have 73 overall and below do not count
            towards your trades.
          </p>
          <p>
            Picks for players 73 and under will not count towards your trade
            counter.
          </p>
          <p>
            Players signed from the most recent round of free agency, normal
            free agency, and blind free agency may not be traded until the
            following season &nbsp;which starts free agency week 1 of the
            off-season.
          </p>
          <p>
            All Superstar/X-Factor players must be posted to #trade-block for at
            least 24 hours before accepting a trade.
          </p>
          <p>
            Picks in the top 10 of the draft must also be posted on the trade
            block for at least 24 hours before being traded.
          </p>
          <p>
            The amount of trades in-game it takes to process the trade is the
            number of trades it will count towards your season or off-season
            trades.
          </p>
          <p>Rough Example</p>
          <p>4+ players on one side will take 2 trades to process</p>
          <p>7+ players on one side will take 3 trades to process</p>
          <p>
            Teams that demonstrate the following will see trade limitations
            lessened or removed altogether:
          </p>
          <p>Lack of commitment to the league</p>
          <p>
            An ability to manage a team in a fashion that ensures its health for
            future owners
          </p>
          <p>Limitations will be conjured by Admins.</p>
          <p>
            Good Faith Negotiations &nbsp;- Owners may not back out of trades
            once both parties submit the trade to the TC. Additionally, owners
            may not lie or knowingly present false information in negotiations.
            Penalties for doing so will be harsh.
          </p>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 5 - FREE AGENCY</h3>
          <p>
            Limited to 2 FA pickups a week during the regular season -
            exceptions can be made but admin approval will be necessary
          </p>
          <p>
            Off-Season Free Agency will follow the below age rule when offering
            a contract. No additional bets or offer increases can be placed
            within an hour of the proposed advance. This includes before and
            after said proposed advance time.
          </p>
          <p>Free Agent / Resigning Contracts</p>
          <p>Players 25 years old or younger can sign for up to 5 years.</p>
          <p>
            If they are 26 or over they can only be signed to a max of 4 years
            contract
          </p>
          <p>
            Youth Development, No cutting rookies to Free Agency only then to
            pick them up again
          </p>
          <p>&nbsp;Free Agency Draft</p>
          <p>
            The post-draft free agency will consist of a blind auction using
            each team&#39;s pre-season cap room. Teams will have a 24 hour
            period to submit bids on players using a google form. If your bid
            wins a player you will sign them and an admin will adjust the
            contract in-gameblind-free to match your bid.
          </p>
          <p>
            Coaches are now allowed to offer multi-year deals in blind free
            agency. The trade committee will be used to decide if there are
            close offers. Offers must still follow the contract length rule that
            is above.
          </p>
          <p>
            Please ensure you have the cap space required to fulfill all of your
            offers, or you may lose any/all players won in the auction.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open Free Agency
          </p>
          <ul>
            <li>
              &nbsp;For players below 90 overall, the max bid value during free
              agency will be 150.
            </li>
            <li>
              &nbsp;If they are 90 overall or above the bid value can go up to
              200 points max.
            </li>
            <li>
              Offers over 100 points cannot be rescinded to ensure coaches are
              not running up contract offers. If you have a bid over 100 points,
              and you are outbid and unwilling to go higher you may rescind the
              offer from the player, but if you rescind the offer, you will be
              unable to make another bid on that player.
            </li>
            <li>
              The minimum number of points that can be bid on a player is 40
              points. Any offers below 40 will be asked to remove the bid or to
              raise. If the winning bid from a player is less than 40 points,
              the coach will be forced to release the player and take the
              penalty.
            </li>
            <li>
              For any bid placed on a Quarterback (QB) you are required to have
              the bonus given as 50% of the salary given. For example, If you
              were to bid for Jay Cutler, and if you offered 20 million dollars
              for the salary, the bonus would have to be 10 million. If you have
              a question regarding if your bid is enough, please feel free to
              ask an admin.
            </li>
          </ul>
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 6 - DRAFT</h3>
          <p>
            Coaches are given 30 seconds per pick for rounds 4-7. If no pick is
            made, the pick will be an auto-draft.
          </p>
          <p>&nbsp; Limited to max of 3 picks per round for rounds 1-2</p>
          <p>Rounds 3-7 there is no limit</p>
        </div>
        <h2 className="mb-2 text-3xl font-bold underline">
            SECTION 5. SETTINGS &amp; SLIDERS
          </h2>
        <div className="flex flex-col flex-wrap items-center justify-center">
          </div><div className="w-full m-2 border-2 border-white rounded-sm">
          <h3>ARTICLE 1 - SETTINGS</h3>
          <p>The most &nbsp;Up to date Roster will be used</p>
          <p>&nbsp;</p>
          <p>Quarter Length: 8 Minutes</p>
          <p>Accelerated Clock: 20 Seconds</p>
          <p>Difficulty: All-Madden</p>
          <p>Game Speed: Normal</p>
          <p>Game Style: Simulation</p>
          <p>Ball Carrier Moves: Manual</p>
          <p>Playmaker: Not allowed</p>
          <p>&nbsp;</p>
          <p>Playbooks</p>
          <p>
            &middot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Custom playbooks are not
            allowed
          </p>
        </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
