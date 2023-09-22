import React from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Policy = () => {
  return (
    <section className="py-10 px-5 md:px-16 ">
      <h2
        className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-6 text-center md:text-2xl `}
      >
        TICKETS POLICY{" "}
      </h2>

      <p className="policy-paragraph">
        Please read these Festival Ticket Terms ("Terms" or "Agreement")
        carefully, as they affect your future legal rights. These Terms apply to
        the event or festival described on this website (the "Event").
      </p>
      <p className="policy-paragraph">
        All Event tickets, wristbands, passes, permissions, authorizations and
        entry methods (whether physical or digital and whether for a patron or
        their vehicle) (collectively, "Tickets") are subject to these Terms. By
        accepting possession or by using any Ticket or by entering the Event,
        User agrees to all Terms and is legally bound to comply with these
        Terms. The original Authorized Purchaser and any Authorized Recipient
        (defined below) agrees to inform all of their respective guests of these
        Terms with due diligence. The Event producer reserves the right, at its
        discretion, to change, modify, add, or remove portions of these Terms at
        any time. Please check back periodically for changes.
      </p>
      <p className="policy-paragraph">
        Tickets evidence a revocable license to enter the Event property.
        Violation of these Terms of use may result in revocation of the license
        without prior notice.
      </p>
      <h3 className="policy-subheading">UNAUTHORIZED TRANSFERS PROHIBITED</h3>
      <p className="policy-paragraph">
        All publicly sold Tickets are for use by the original authorized
        purchaser and their invited guest(s) only (each an "Authorized
        Purchaser"), and are not transferable by the Authorized Purchaser, any
        of their invited guests, or any other person. Likewise, all Tickets
        provided to performing artists, production personnel, vendors, sponsors,
        and other guests of the Event producer (each an "Authorized Recipient"),
        are for use by the Authorized Recipient and his or her invited guest(s)
        only, and are not transferable by the Authorized Recipient, his or her
        invited guest(s), or any other person. Authorized Purchasers and
        Authorized Recipients are referred to individually as a "User." Tickets
        obtained from unauthorized sources may be counterfeit and are worthless.
      </p>
      <p className="policy-paragraph">
        Except as provided herein, Tickets may not be sold, transferred, or used
        for any form of commercial or trade purposes, including but not limited
        to promotions, contests, commercial or advertising purposes, housing,
        hotels, vacation rentals, sweepstakes, charitable giveaways, or other
        activities absent the Event producer's prior written consent. No
        sponsorship, on site marketing, sampling, vending, coupon/product
        distribution, or other promotional activity may be conducted at the
        Event (inclusive of parking lots), absent the Event producer's prior
        written approval in each instance. Any Tickets used in violation of this
        provision shall be deemed revoked and void, and their bearers deemed
        trespassers at the Event.
      </p>
      <p className="policy-paragraph">
        Resale or attempted resale of Tickets is grounds for termination of the
        license and cancellation of the Ticket.
      </p>
      <h3 className="policy-subheading">
        AUTHORIZATION OF USER'S IMAGE AND LIKENESS
      </h3>
      <p className="policy-paragraph">
        User grants the Event producer (and its designees) the right to include
        User's image, likeness, actions, and statements in any live or recorded
        audio, video, film, webcast, stream, or other transmission, exhibition,
        simulcast, or reproduction made of, or at, the Event in any medium or
        context for any purpose, including commercial or promotional purposes,
        without further authorization or otherwise.
      </p>
      <h3 className="policy-subheading">
        OWNERSHIP AND USE OF EVENT'S INTELLECTUAL PROPERTY
      </h3>
      <p className="policy-paragraph">
        The Event producer owns the trademarks, imagery, name, likeness, and
        trade dress of the Event (collectively, the "Event Intellectual
        Property") and generally does not permit the use of the Event
        Intellectual Property by third parties. User agrees not to make use of
        the Event Intellectual Property except for nominative fair use or with
        prior written permission from the Event producer.
      </p>
      <h3 className="policy-subheading">
        NO LIVE AUDIO, VIDEO STREAMING OR BROADCASTS
      </h3>
      <p className="policy-paragraph">
        The Event producer retains all webcast/Internet rights to the Event. Any
        live streams or broadcasts, whether for Internet or otherwise, from the
        Event must be specifically agreed to in advance with the Event producer.
        No one may transmit, broadcast, or communicate any live audio or
        audiovisual images from the Event site without the Event producer's
        prior written permission. As an example, this prohibition includes, but
        is not limited to, use of any service which broadcasts to the Internet.
        Even if User is a performer or sponsor, the broadcasting, displaying, or
        communicating of any live audio or audiovisual images (whether for
        personal, commercial, or other use) is expressly prohibited without the
        prior written permission of the Event producer.
      </p>
      <h3 className="policy-subheading">
        AUDIO AND/OR VIDEO RECORDINGS AND RELATED EQUIPMENT
      </h3>
      <p className="policy-paragraph">
        Without the express prior written permission of the Event producer, User
        may not bring any audio or video recording devices (except for personal
        cell phones) into the Event.
      </p>
      <h3 className="policy-subheading">PHOTOGRAPHY AND VIDEO / EQUIPMENT</h3>
      <p className="policy-paragraph">
        User may bring personal, non-commercial, photography devices into the
        Event and may use these devices to obtain short-form video and still
        photographs (collectively "Personal Content"). By way of example,
        personal, non-commercial, photography and video devices include, but are
        not limited to, cell phones, small digital or film cameras (without a
        detachable lens).
      </p>
      <p className="policy-paragraph">
        Without the express prior written permission of the Event producer, User
        may not bring any of the following devices into the Event: Any
        photography device which is designed for, or suitable for, any
        commercial purpose, selfie sticks, tripods, monopods, boom arms, any
        device which could be used to mount or hold a photography device or
        could be used to extend User's reach. Event producer reserves the right,
        in its sole discretion, to prohibit any device it believes may be used
        in violation of these Terms, which it believes poses a safety risk, or
        which it believes may lessen the enjoyment of the Event by others.
      </p>
      <p className="policy-paragraph">
        USER MAY NOT MAKE ANY COMMERCIAL USE OF ANY PERSONAL CONTENT WITHOUT THE
        PRIOR WRITTEN PERMISSION OF THE EVENT PRODUCER. By way of example,
        commercial use may include, but is not limited to, posting Personal
        Content on a website that sells a product, or displays any ads or
        sponsored links; using or causing Personal Content to appear in any
        publication, magazine, serial, or book; using Personal Content to sell,
        sponsor, or endorse a product; or using Personal Content on any website
        that is or appears to be affiliated or associated with, or sponsored by
        the Event or the Event producer. Event producer reserves the right to
        prohibit any use of Personal Content which it believes is in violation
        of the Terms. Event producer in its sole discretion may determine what
        constitutes a commercial use not permitted by the Terms.
      </p>
      <p className="policy-paragraph">
        User may use Personal Content for User's own direct, noncommercial, use.
        Examples of direct, noncommercial use include, but are not limited to,
        posting Personal Content on User's own personal social media account
        (e.g., TikTok, Facebook, Instagram, or Twitter); posting Personal
        Content to personal website or personal content sharing site (unless the
        account, personal website or personal content sharing site is affiliated
        or associated with a commercial use); and sharing Personal Content with
        User's personal friends or family (whether in electronic or physical
        media). Direct, noncommercial, use never involves posting of Personal
        Content on any website or server, or in any other media whether
        electronic or physical, which sells any product or service, or features
        or contains any advertisements or sponsored links, or which purports or
        appears in any way, to be an official or affiliated website of the Event
        or the Event producer. Without the express prior written permission of
        the Event producer, User may not sell, transfer, license, sublicense,
        give or otherwise transfer any Personal Content or ownership therein.
      </p>
      <p className="policy-paragraph">
        Without the express prior written permission of the Event producer,
        Personal Content that contains any nudity or partial nudity or footage
        of Event Artist performances may not be used for any purpose.
      </p>
      <h3 className="policy-subheading">ASSIGNMENT OF COPYRIGHTS</h3>
      <p className="policy-paragraph">
        Unless otherwise expressly agreed to in writing by the Event producer,
        User assigns to Event producer the exclusive ownership to User's
        Personal Content and to any audio recordings taken at the event by User.
        Event producer may execute any assignment documents on User's behalf as
        necessary to perfect Event producer's ownership, and User appoints Event
        producer as User's attorney-in-fact to execute any such documents for
        User. User further acknowledges, agrees to, and consents to Event
        producer registering the copyright with one or more copyright
        authorities, including but not limited to the United States Copyright
        Office, and listing the User's contribution as anonymous.
      </p>
      <p className="policy-paragraph">
        Event producer, as the copyright owner, has the right, but not the
        obligation, and at its sole discretion, to enforce its copyright rights
        in any Personal Content or audio or video recordings taken at the event
        not permitted by the Terms.
      </p>
      <p className="policy-paragraph">
        Event producer assigns to User the non-exclusive right to use User's
        Personal Content for User's own direct, noncommercial, use as permitted
        in the Terms. All other rights not assigned by Event producer to User
        are retained by Event producer. Any violation of the Terms shall be
        grounds for Event producer to cancel the assignment to User.
      </p>
      <h3 className="policy-subheading">
        ARTISTS AND SET TIMES SUBJECT TO CHANGE
      </h3>
      <p className="policy-paragraph">
        Event Artists and set times are subject to change without notice.
      </p>
      <h3 className="policy-subheading">MEDICAL CONSENT</h3>
      <p className="policy-paragraph">
        User consents to have medical treatment that may be deemed advisable in
        the event of an injury, accident, or illness during the Event and
        affirmatively releases the Event producer and all persons participating
        in such medical treatment from all responsibility for any such actions.
      </p>
      <h3 className="policy-subheading">CONSENT TO SEARCH/REFUSAL/EJECTION</h3>
      <p className="policy-paragraph">
        User and User's belonging may be searched upon entry into the Event, and
        User consents to such searches and waives any related claims that might
        arise against the Event producer and its agent. If User elects not to
        consent to such searches, User may be denied entry into the Event.
      </p>
      <h3 className="policy-subheading">ADDITIONAL PROHIBITED ITEMS</h3>
      <p className="policy-paragraph">
        In addition to those items prohibited elsewhere in these Terms, without
        the express prior written permission of the Event producer, User may not
        bring any of the following items into the Event (or cause any of items
        to enter the event): glass bottles, aluminum bottles, knives,
        explosives, sling shots, weapons of any other kind, Frisbees, flags,
        skateboards, roller skates, hover boards, laser pointers, drones of any
        kind, remote controlled devices or remote controlled toys, large
        backpacks, and other items as designated by Event producer. Event
        producer reserves the right to refuse admission to or eject any person,
        at Event producer's sole discretion, whose conduct is disorderly,
        disruptive, or who fails to follow the Event's rules or directions, or
        whose language is vulgar or abusive.
      </p>
      <h3 className="policy-subheading">
        ASSUMPTION OF RISK, WAIVER & LIMITATION OF LIABILITY
      </h3>
      <p className="policy-paragraph">
        Assumption of Risk. User understands and agrees that there are certain
        risks of personal or property injury, illness and/or death associated
        with attending the Event, including, without limitation, risks related
        to the novel coronavirus SARS-CoV-2 and any resulting disease (together
        with any mutation, adaptation or variation thereof, "COVID-19"). User
        understands and agrees (a) that the risk of exposure to COVID-19 cannot
        be fully eliminated and is increased by proximity to other people, (b)
        that an inherent and elevated risk of exposure to COVID-19 exists in any
        public place or place where people are gathered, (c) that attending the
        Event may involve coming into close contact with other people, (d) that
        there is no guarantee, express or implied, that User will not be exposed
        to COVID-19 and (e) that exposure to COVID-19 can result in being
        subject to quarantine requirements, illness, disability, and other
        short-term and long-term health effects, including death.
      </p>
      <p className="policy-paragraph">
        Despite these risks, User voluntarily assumes ALL known and potential
        risk and danger of injury and/or death from any cause, resulting from,
        in connection with, or incidental to the Event, including exposure to
        COVID-19. By accepting possession or by using any Ticket, User expressly
        assumes all risks and dangers arising from or incidental to the Event,
        whether such risks occur before, during, or after the Event and agrees
        that the Releasees (defined below) are not responsible for any such
        risks and dangers.
      </p>
      <p className="policy-paragraph">
        User further agrees to indemnify, defend, and hold harmless Releasees
        from any and all claims, demands, liabilities and/or damages arising
        from all Claims and User's conduct, acts or omissions during the Event.
        In no event shall Releasees be liable for consequential or indirect
        damages.
      </p>
      <p className="policy-paragraph">
        Limitation of Liability. To the fullest extent permitted by applicable
        laws, none of the Releasees are or will be responsible or liable to User
        or to any third party for, and User expressly waives all rights to seek
        any indirect, incidental, consequential, special, exemplary, punitive or
        other damages under any theory of liability, arising out of or relating
        in any way to the Terms, the Ticket and/or the Event (even if we have
        been advised of the possibility of such loss or damages, or such loss or
        damages were reasonably foreseeable).
      </p>
      <h3 className="policy-subheading">
        INDIVIDUAL ARBITRATION AGREEMENT AND CLASS ACTION WAIVER ("ARBITRATION
        AGREEMENT")
      </h3>
      <p className="policy-paragraph">
        Unless prohibited by federal law, User and Releasees (the "Parties" or,
        individually, a "Party") agree to arbitrate any and all Claims, except
        for Claims concerning the validity, scope or enforceability of this
        Arbitration Agreement, through BINDING INDIVIDUAL ARBITRATION.{" "}
      </p>
      <p className="policy-paragraph">
        In any claim or dispute to be resolved by arbitration, neither Party
        will be able to have a court or jury trial or participate in a class
        action or class arbitration. Other rights that the Parties would have if
        the Parties went to court will not be available or will be more limited
        in arbitration, including the right to appeal. Each Party understands
        and agrees that by requiring each other to resolve all disputes through
        individual arbitration, WE ARE EACH WAIVING THE RIGHT TO A COURT OR JURY
        TRIAL. ALL DISPUTES SHALL BE ARBITRATED ON AN INDIVIDUAL BASIS, AND NOT
        AS A CLASS ACTION, REPRESENTATIVE ACTION, CLASS ARBITRATION OR ANY
        SIMILAR PROCEEDING. The arbitrator(s) may not consolidate the claims of
        multiple parties.
      </p>
      <p className="policy-paragraph">
        Arbitrations shall be administered by the Ghanaian Arbitration
        Association ("GAA") pursuant to the applicable AAA rules in effect at
        the time the arbitration is initiated. User may obtain information about
        arbitration, arbitration procedures and fees from by emailing
        corporate@unilandfestion.com or visiting www.adr.org. If GAA is unable
        or unwilling to arbitrate a dispute, then the dispute may be referred to
        any other arbitration organization or arbitrator the Parties both agree
        upon in writing or that is appointed pursuant to Section 5 of the FAA.
        The arbitration shall take place in the federal judicial district where
        the Event took place, or in another location on which the Parties agree.
        The arbitrator shall be authorized to award any relief that would have
        been available in court, provided that the arbitrator's authority is
        limited to the Parties alone, except as otherwise specifically stated
        herein. No arbitration decision will have any preclusive effect as to
        non-parties. The arbitrator's decision shall be final and binding. The
        Parties agree that this Arbitration Agreement extends to any other
        parties involved in any Claims, including but not limited to anyone for
        whom User purchases Tickets and Releasees' employees, affiliated
        companies and vendors. This Arbitration Agreement shall take precedence
        over the rules of the arbitration organization or arbitrator in the
        event of any conflict.
      </p>
      <p className="policy-paragraph">
        The Parties each may exercise any lawful rights to seek provisional
        remedies or self-help, without waiving the right to arbitrate by doing
        so.
      </p>
      <p className="policy-paragraph">
        {" "}
        Notwithstanding any other provision of this Agreement, if the foregoing
        class action waiver and prohibition against class arbitration is
        determined to be invalid or unenforceable, then this entire Arbitration
        Agreement shall be void. If a claim is brought seeking public injunctive
        relief and a court determines that the restrictions in the Arbitration
        Agreement prohibiting the arbitrator from awarding relief on behalf of
        third parties are unenforceable with respect to such claim (and that
        determination becomes final after all appeals have been exhausted), the
        claim for public injunctive relief will be determined in court and any
        individual claims will be arbitrated. In such a case, the court shall
        stay the claim for public injunctive relief until the arbitration
        pertaining to individual relief has been entered in court. In no event
        will a claim for public injunctive relief be arbitrated. If any portion
        of this Arbitration Agreement other than the class action waiver and
        prohibition against class arbitration is deemed invalid or
        unenforceable, it shall not invalidate the remaining portions of this
        Arbitration Agreement. This Arbitration Agreement will survive the
        termination of this Agreement, your fulfillment or default of your
        obligations under this Agreement, and/or the Parties' bankruptcy or
        insolvency (to the extent permitted by applicable law).
      </p>
      <p className="policy-paragraph">
        USER HAS THE RIGHT TO REJECT THIS ARBITRATION AGREEMENT, BUT USER MUST
        EXERCISE THIS RIGHT PROMPTLY. If User does not wish to be bound by this
        agreement to arbitrate, User must notify us in writing within sixty (60)
        days after the date User signs this Agreement. User must send his or her
        request to corporate@unilandfest.com. The request must include User's
        full name, address, invoice number, and the statement "I reject the
        Arbitration Agreement contained in the Festival Ticket Terms." If User
        exercises his/her right to reject arbitration, the other terms of this
        Agreement shall remain in full force and effect as if User had not
        rejected arbitration.
      </p>
      <h3 className="policy-subheading">
        IRREPARABLE INJURY AND CONSENT TO INJUNCTIVE RELIEF
      </h3>
      <p className="policy-paragraph">
        Any breach of these Terms by the User will cause irreparable injury to
        Event producer and User consents to injunctive relief to prevent or
        mitigate any irreparable injury.
      </p>
      <h3 className="policy-subheading">GOVERNING LAW</h3>
      <p className="policy-paragraph">
        Except as otherwise stated in the Arbitration Agreement above, any Claim
        arising from or relating to these Terms, the Event, or our dealings with
        one another, whether based in contract, tort, fraud or otherwise and
        regardless of the place of User's residence, is governed by, and
        construed in accordance with, federal and Ghana law, without regard to
        conflict of laws principles. If any provision of these Terms shall be
        unlawful, void, or for any reason unenforceable, then that provision
        shall be deemed severable from these Terms and shall not affect the
        validity and enforceability of any remaining provisions.
      </p>
      <h3 className="policy-subheading">OTHER RIGHTS / RESTRICTIONS</h3>
      <p className="policy-paragraph">
        No sponsorship, on site marketing, sampling, vending, coupon/product
        distribution, or other promotional/advertising activity may be conducted
        at the Event (inclusive of parking lots), absent the Event producer's
        prior written approval in each instance.
      </p>
      <p className="policy-paragraph">
        The Event producer reserves all rights not expressly granted to User.
        The terms and restrictions noted on the website of the Event producer's
        designated ticketing company, and its Privacy Policy and Terms of Use,
        available on the Event website, are also included herein by reference.
        In the event of any conflict, the terms on this page shall prevail.
      </p>
    </section>
  );
};

export default Policy;
