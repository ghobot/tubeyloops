Emit = {

  data: [],
  sender: null,
  last: null

};





var sampler, p, spa, upa, u, kA, K = {};
K.D = {};
K.B = {};
K.C = {};

function P() {
    sampler = new Sampler();

    //console.log( sampler );
    if (typeof(kA) == "object") {
        sampler.setAvailableKits(kA)
    }
    if (typeof(p) == "object") {
        sampler.setPattern(p)
    }
    if (typeof(upa) == "object") {
        sampler.setUserPatternArr(upa)
    }
    if (typeof(spa) == "object") {
        sampler.setSystemPatternArr(spa)
    }
    if (typeof(u) == "number") {
        sampler.setCurrentUser(u)
    }
}
if (window.addEventListener) {
    window.addEventListener("load", P, false)
} else {
    window.attachEvent("onload", P)
}
/*
window.onbeforeunload = function () {
    var a = "Any unsaved changes will be lost!";
    return a
};
*/

function Sampler() {
    var aA, a, ay, aJ, au, r, ag = [],
        aK = [],
        d = [],
        o = [],
        aw = [],
        Q = {
            tempo: 0,
            steps: 0,
            chVol: {},
            kit: {},
            pattern: []
        },
        aj = [],
        ax = [],
        an = [],
        ak = [],
        aP = "paused",
        W = 16,
        V = 1,
        ah = 16,
        J = 0,
        k = 1,
        aE = 4,
        ac = 16,
        ar = ah,
        f, i, n, aN, e, z, az, X, aF = 0,
        af = {
            65: 8,
            68: 10,
            69: 2,
            70: 11,
            71: 12,
            73: 6,
            74: 13,
            75: 14,
            76: 15,
            79: 7,
            81: 0,
            82: 3,
            83: 9,
            84: 4,
            85: 5,
            87: 1
        },
        y, aQ, h;

    function aC() {
        return Math.ceil(ar / ac)
    }
    function ae() {
        f.add(ae, n);
        var aS = Q.pattern[V - 1],
            aU, aR, aT;
        aR = aC();
        aT = Math.ceil(V / ac);
        if (aR == J) {
            R(aw[(ar - 1) - ((aR - 1) * ac)], "clsStepCurrent")
        }
        if (aT == J) {
            A(aw[(V - 1) - ((aT - 1) * ac)], "clsStepCurrent")
        }
        ar = V;
        V++;
        if (V > ah) {
            V = 1
        }

        //console.log( aS );
        for (aU = 0; aU < aS.length; aU++) {

           //console.log( ag[aS[aU]] );
            ag[aS[aU]].play()
        }

        //console.log( "fire from within ae()", { event: f } );


        //f.fire()
    }
    function am(aR) {

        //  POPCORN play/pause
        Emit.sender  .trigger("sketchControl", { data: aR } );

        if (aR == "playing") {
            A(aA, "btnPause");
            R(aA, "btnPlay");
            aA.title = "Pause    [space]";
            clearInterval(i);
            ae()
        } else {
            if (aR == "paused") {
                A(aA, "btnPlay");
                R(aA, "btnPause");
                aA.title = "Play    [space]";
                f.clear()
            }
        }
    }
    function v() {
        aP = (aP == "playing") ? "paused" : "playing";
        am(aP)
    }
    af[32] = function () {
        v()
    };
    af[37] = function () {
        j()
    };

    function al(aT, aU) {
        if (aU < ah) {
            var aV = (aU - ((Math.ceil((aU + 1) / ac) - 1) * ac)),
                aS = Q.pattern[aU],
                aR = o[aT][aV],
                aW;
            for (aW = 0; aW < aS.length; aW++) {
                if (aS[aW] == aT) {
                    aS.splice(aW, 1);
                    R(aR, "clsStepOn");
                    return
                }
            }
            aS.push(aT);
            A(aR, "clsStepOn")
        }
    }
    function aq(aS, aR) {
        return function () {
            f.run(function () {
                al(aS, aR)
            })
        }
    }
    function t() {
        var aS, aR;
        for (aS = 0; aS < ah; aS++) {
            if (!Q.pattern[aS]) {
                Q.pattern[aS] = []
            }
        }
        for (aR = 0; aR < o.length; aR++) {
            for (aS = 0; aS < ac; aS++) {
                if (o[aR][aS]) {
                    o[aR][aS].onclick = aq(aR, (aS + ((J - 1) * ac)))
                }
            }
        }
    }
    function aI() {
        var aR = ((J - 1) * ac),
            aS, a1, aY, aZ, a0, a3, a2, aX = new RegExp("(\\s|^)clsStepDisabled(\\s|$)"),
            aW = new RegExp("(\\s|^)clsStepOn(\\s|$)"),
            aV, aU, aT;
        for (aV = 0; aV < o.length; aV++) {
            for (aU = 0; aU < ac; aU++) {
                aS = (aU + aR);
                a1 = o[aV][aU];
                a3 = Q.pattern[aS];
                aY = a1.className;
                aZ = aY.match(aX);
                a0 = aY.match(aW);
                if (aS >= ah) {
                    if (!aZ) {
                        A(a1, "clsStepDisabled", true)
                    }
                } else {
                    if (aZ) {
                        R(a1, "clsStepDisabled", true)
                    }
                    a2 = false;
                    for (aT = 0; aT < a3.length; aT++) {
                        if (a3[aT] == aV) {
                            a2 = true;
                            if (!a0) {
                                A(a1, "clsStepOn", true)
                            }
                            break
                        }
                    }
                    if (!a2 && a0) {
                        R(a1, "clsStepOn", true)
                    }
                }
            }
        }
    }
    function av() {
        var aR = aC();
        return (ar - 1) - ((aR - 1) * ac)
    }
    function T(aU) {
        if (aU <= k && aU != J) {
            var aV, aR, aT, aS;
            J = aU;
            t();
            aI();
            for (aV = 0; aV < ak.length; aV++) {
                aS = ak[aV];
                if ((aV + 1) == aU) {
                    A(aS, "barCurrent")
                } else {
                    R(aS, "barCurrent")
                }
            }
            aR = aC();
            aT = av();
            if (aR != aU) {
                R(aw[aT], "clsStepCurrent")
            } else {
                A(aw[aT], "clsStepCurrent")
            }
        }
    }
    function aG(aR) {
        return function () {
            f.run(function () {
                T(aR)
            });
            return false
        }
    }
    function at() {
        var aR;
        if (aF) {
            for (aR = 0; aR < W; aR++) {
                if (H(an[aR], "channelSoloOn")) {
                    if (H(ax[aR], "channelMuteOn")) {
                        ag[aR].setMute(true)
                    } else {
                        ag[aR].setMute(false)
                    }
                } else {
                    ag[aR].setMute(true)
                }
            }
        } else {
            for (aR = 0; aR < W; aR++) {
                if (H(ax[aR], "channelMuteOn")) {
                    ag[aR].setMute(true)
                } else {
                    ag[aR].setMute(false)
                }
            }
        }
    }
    function ad(aR) {
        var aS = an[aR];
        if (H(aS, "channelSoloOn")) {
            R(aS, "channelSoloOn");
            aF--
        } else {
            A(aS, "channelSoloOn");
            aF++
        }
        at()
    }
    function aH(aR) {
        return function () {
            ad(aR);
            return false
        }
    }
    function aD(aS) {
        var aR = ax[aS];
        if (H(aR, "channelMuteOn")) {
            R(aR, "channelMuteOn")
        } else {
            A(aR, "channelMuteOn")
        }
        at()
    }
    function L(aR) {
        return function () {
            aD(aR);
            return false
        }
    }
    function j() {
        V = 1;
        J = 0;
        T(1);
        var aR = av();

        R(aw[aR], "clsStepCurrent");
        A(aw[0], "clsStepCurrent")
    }
    function q() {
        var aR, aS;
        aR = confirm("Are you sure you want to clear this pattern?");
        if (aR) {
            for (aS = 0; aS < ah; aS++) {
                Q.pattern[aS] = []
            }
            aP = "playing";
            v();
            j()
        }
    }
    function g(aR) {
        A(d[aR], "clsInstrumentActive")
    }
    function aB(aR) {
        g(aR);
        ag[aR].play()
    }
    function Y(aR) {
        return function () {
            aB(aR);
            return false
        }
    }
    function Z(aR) {
        return function () {
            R(d[aR], "clsInstrumentActive")
        }
    }
    function w(aT) {
        if (!aT) {
            aT = window.event
        }

        var aR = af[aT.keyCode],
            aS = typeof(aR);
        if (aS != "undefined") {
            if (aS == "function") {
                aR()
            } else {
                if (aS == "number") {
                    aB(aR)
                }
            }
            return false
        }
    }
    function N(aT) {
        if (!aT) {
            aT = window.event
        }
        var aR = af[aT.keyCode],
            aS = typeof(aR);
        if (aS != "undefined") {
            if (aS == "number") {
              //console.log( "?", aR, d );
              R(d[aR], "clsInstrumentActive")
            }
        }
    }
    function b(aR) {
        return function (aS) {
            Q.chVol[aR] = aS;
            ag[aR].setVolume((aS / 100) * (az / 100))
        }
    }
    function U(aR) {
        Q.tempo = aR;
        n = Math.round((1000 * ((60 / aR) / aE)))
    }
    function m(aR) {
        R(aw[av()], "clsStepCurrent");
        ah = aR;
        k = Math.ceil(ah / ac);
        ar = ah;
        t();
        j()
    }
    function s(aS) {
        var aT, aR;
        Q.steps = aS;
        m(aS);
        for (aT = 0; aT < ak.length; aT++) {
            aR = ak[aT];
            if ((aT + 1) <= k) {
                R(aR, "barDisabled")
            } else {
                A(aR, "barDisabled")
            }
        }
    }
    function aM(aS) {
        var aT, aR;
        az = aS;
        for (aT = 0; aT < W; aT++) {
            aR = aj[aT].getValue();
            ag[aT].setVolume(Math.round((aR * az) / 100) / 100)
        }
    }
    function aa(aR, aS) {
        aQ.setSystemKit(aR, aS, X, W, aK, ag);
        Q.kit = {
            id: aS,
            name: aR
        }
    }
    this.setSystemKit = aa;

    function F(aR) {
        aQ.setAvailableKits(aR)
    }
    this.setAvailableKits = F;

    function ai() {
        y.logout()
    }
    this.logout = ai;

    function x() {
        return y.sessionExists()
    }
    this.sessionExists = x;

    function aL(aR) {
        y.setCurrentUser(aR)
    }
    this.setCurrentUser = aL;

    function c(aS, aR) {
        h.setPattern(aS, aR, f, Q, aj, e, aN)
    }
    this.setPattern = c;

    function O(aR) {
        h.setUserPatternArr(aR)
    }
    this.setUserPatternArr = O;

    function ao(aR) {
        h.setSystemPatternArr(aR)
    }
    this.setSystemPatternArr = ao;

    function ab(aR) {
        h.setUserPatternDirtyFlag(aR)
    }
    this.setUserPatternDirtyFlag = ab;

    function l() {
        return ah
    }
    this.getTotalSteps = l;

    function aO() {
        return Q
    }
    this.getSequenceArr = aO;

    function ap(aT) {
        aA = $("divPlayPause");
        a = $("divJumpToStart");
        ay = $("divClearPattern");
        aJ = $("divTempo");
        au = $("divSteps");
        r = $("divVolume");
        var aS, aU, aR;
        window.onkeydown = w;
        window.onkeyup = N;
        d = G("drumPad");
        aj = G("divVolumeWidget");
        ax = G("channelMute");
        an = G("channelSolo");
        aK = G("instrumentName");
        aw = G("sequencerPositionLED");
        aS = $("divStepWrapper");
        for (aU = 0; aU < aS.children.length; aU++) {
            o[aU] = aS.children[aU].children
        }
        ak = $("divViewBarInnerWrapper").getElementsByTagName("div");
        f = new K.D.PriorityTask();
        for (aU = 0; aU < ak.length; aU++) {
            ak[aU].onmousedown = aG(aU + 1)
        }
        for (aU = 0; aU < W; aU++) {
            d[aU].onmousedown = Y(aU);
            d[aU].onmouseup = Z(aU);
            ag[aU] = new C();
            ax[aU].onmousedown = L(aU);
            an[aU].onmousedown = aH(aU);
            aj[aU] = new B({
                container: aj[aU],
                minValue: 0,
                maxValue: 100,
                initValue: 100, //75,
                btnWidth: 15,
                txtPadding: 2,
                clickTimeout: 50,
                title: "Volume",
                maxLength: 3,
                bodyClass: "stepWidgetChannelBody",
                txtClass: "stepWidgetChannelTxt",
                incBtnClass: "stepWidgetInc",
                decBtnClass: "stepWidgetDec",
                onValueChange: b(aU)
            })
        }
        aN = new B({
            container: aJ,
            minValue: 20,
            maxValue: 200,
            initValue: 120,
            btnWidth: 15,
            title: "Tempo",
            maxLength: 3,
            bodyClass: "stepWidgetBody",
            txtClass: "stepWidgetTxt",
            incBtnClass: "stepWidgetInc",
            decBtnClass: "stepWidgetDec",
            onValueChange: function (aV) {
                f.run(function () {
                    U(aV)
                })
            }
        });
        e = new B({
            container: au,
            minValue: 1,
            maxValue: 64,
            initValue: 16,
            btnWidth: 15,
            title: "Steps",
            maxLength: 2,
            bodyClass: "stepWidgetBody",
            txtClass: "stepWidgetTxt",
            incBtnClass: "stepWidgetInc",
            decBtnClass: "stepWidgetDec",
            onValueChange: s
        });
        z = new B({
            container: r,
            minValue: 0,
            maxValue: 100,
            initValue: 100, //75,
            btnWidth: 15,
            title: "Master Volume",
            maxLength: 3,
            bodyClass: "stepWidgetBody",
            txtClass: "stepWidgetTxt",
            incBtnClass: "stepWidgetInc",
            decBtnClass: "stepWidgetDec",
            onValueChange: aM
        });
        aR = ag[0].getValidFormats();
        if (aR.ogg) {
            X = "ogg"
        } else {
            if (aR.mp3) {
                X = "mp3"
            } else {
                alert("Your browser does not support this app :-\\")
            }
        }
        aA.onclick = function () {
            v();
            return false
        };
        a.onclick = function () {
            j();
            return false
        };
        ay.onclick = function () {
            q();
            return false
        };
        aQ = new Kit();
        h = new Pattern();
        y = new Account();
        aT.loginModal = y.loginModal;
        aT.signupModal = y.signupModal;
        aT.kitModal = aQ.kitModal;
        aT.patternModal = h.patternModal;
        aT.savePatternModal = h.savePatternModal;
        aT.sharePatternModal = h.sharePatternModal;
        aT.downloadPatternModal = h.downloadPatternModal
    }
    ap(this)
}
function Account() {
    var Y, J, X, i, v, f, z, g, Z, b, n, d, a, e, c, r, q, F, w, x = "The email address you provided was not valid.",
        t = "Password must be provided.",
        T = "             <div class='patternModalHeader'><label class='lblModalTitle'>Sign Up</label><label class='lblModalButtons' title='close' onclick='sampler.signupModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divSignupMesg' class='error'></div>                 <form action='' onsubmit='return false;' id='frmSignup'>                     <label class='labelText'>email:</label> <input type='text' id='txtSignupEmail' class='modalText' /><br /><br />                     <input type='submit' id='cmdSignUp' value='sign up' /> <img id='imgSignupLoader' style='display: none;' src='includes/images/ajax-loader.gif' /> <label class='lblLink' onclick='sampler.loginModal.show();'>login</label>                 </form>             </div>",
        k = "             <div class='patternModalHeader'><label class='lblModalTitle'>Login</label><label class='lblModalButtons' title='close' onclick='sampler.loginModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divLoginMesg' class='error'></div>                 <form action='' onsubmit='return false;' id='frmLogin'>                     <label class='labelText'>email:</label><br /><input type='text' id='txtLoginEmail' class='modalText' /><br />                     <label class='labelText'>password:</label><br /><input type='password' id='txtLoginPassword' class='modalText' /><br /><br />                     <input type='submit' id='cmdLogin' value='login' /> <img id='imgLoginLoader' style='display: none;' src='includes/images/ajax-loader.gif' /> <label class='lblLink' onclick='sampler.signupModal.show();'>sign up</label><br /><br />                 </form>                 <label id='lblForgotPassword' class='lblLink'>forgot password</label>             </div>",
        o = "             <div class='patternModalHeader'><label class='lblModalTitle'>Forgot Password</label><label class='lblModalButtons' title='close' onclick='sampler.loginModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divResetMesg' class='error'></div>                 <form action='' onsubmit='return false;' id='frmResetPassword'>                     <label class='labelText'>email:</label> <input type='text' id='txtResetEmail' class='modalText' /><br /><br />                     <input type='submit' id='cmdResetPassword' value='reset password' /> <img id='imgResetLoader' style='display: none;' src='includes/images/ajax-loader.gif' />                 </form>             </div>";

    function O(ac) {
        var ab = D(ac.response);
        if (ab.success) {
            $("frmResetPassword").style.display = "none";
            e = $("divResetMesg");
            e.className = "success"
        } else {
            r.style.display = "inline";
            q.style.display = "none"
        }
        e.innerHTML = ab.mesg
    }
    function l() {
        if (!I(c.value)) {
            e.innerHTML = x;
            return false
        }
        r.style.display = "none";
        q.style.display = "inline";
        w.request({
            url: "api/user.php",
            method: "post",
            parameters: {
                cmd: "resetPassword",
                email: c.value
            },
            handler: O
        })
    }
    function j() {
        Y.setContent(o);
        $("frmResetPassword").onkeydown = S;
        c = $("txtResetEmail");
        c.value = "";
        c.focus();
        e = $("divResetMesg");
        e.className = "error";
        e.innerHTML = "";
        r = $("cmdResetPassword");
        r.onclick = l;
        q = $("imgResetLoader")
    }
    function W(ac) {
        var ab = D(ac.response);
        if (ab.success) {
            Y.hide();
            F = ab.user;
            sampler.setUserPatternArr(ab.pattern.data.user);
            X.style.display = "none";
            i.innerHTML = F + " | <label class='lblLink' onclick='sampler.logout();'>Logout</label>";
            i.style.display = "block"
        } else {
            Z.innerHTML = ab.mesg;
            d.style.display = "inline";
            a.style.display = "none"
        }
    }
    function y() {
        var ab = [];
        if (!I(b.value)) {
            ab.push(x)
        }
        if (!n.value) {
            ab.push(t)
        }
        if (ab.length) {
            Z.innerHTML = ab.join("<br />");
            return false
        }
        d.style.display = "none";
        a.style.display = "inline";
        w.request({
            url: "api/user.php",
            method: "post",
            parameters: {
                cmd: "login",
                email: b.value,
                password: M(n.value)
            },
            handler: W
        })
    }
    function L() {
        $("frmLogin").onkeydown = S;
        b = $("txtLoginEmail");
        b.value = "";
        b.focus();
        n = $("txtLoginPassword");
        n.value = "";
        Z = $("divLoginMesg");
        Z.innerHTML = "";
        d = $("cmdLogin");
        d.onclick = y;
        a = $("imgLoginLoader");
        $("lblForgotPassword").onclick = j
    }
    function h(ac) {
        var ab = D(ac.response);
        if (ab.success) {
            $("frmSignup").style.display = "none";
            v = $("divSignupMesg");
            v.className = "success"
        } else {
            z.style.display = "inline";
            g.style.display = "none"
        }
        v.innerHTML = ab.mesg
    }
    function N() {
        if (!I(f.value)) {
            v.innerHTML = x;
            return false
        }
        z.style.display = "none";
        g.style.display = "inline";
        w.request({
            url: "api/user.php",
            method: "post",
            parameters: {
                cmd: "create",
                email: f.value,
                sequence: E(sampler.getSequenceArr())
            },
            handler: h
        })
    }
    function U() {
        $("frmSignup").onkeydown = S;
        f = $("txtSignupEmail");
        f.value = "";
        f.focus();
        v = $("divSignupMesg");
        v.className = "error";
        v.innerHTML = "";
        z = $("cmdSignUp");
        z.onclick = N;
        g = $("imgSignupLoader")
    }
    function aa(ac) {
        var ab = D(ac.response);
        if (ab.success) {
            F = "";
            i.style.display = "none";
            X.style.display = "block";
            sampler.setUserPatternArr([]);
            sampler.setUserPatternDirtyFlag(true)
        }
    }
    function s() {
        var ab, ac;
        for (ab in K.C) {
            if (K.C[ab]) {
                ac = K.C[ab];
                if (ac._isModal) {
                    ac.hide()
                }
            }
        }
        w.request({
            url: "api/user.php",
            method: "post",
            parameters: {
                cmd: "logout"
            },
            handler: aa
        })
    }
    this.logout = s;

    function m() {
        if (F) {
            return true
        } else {
            return false
        }
    }
    this.sessionExists = m;

    function V(ab) {
        F = ab
    }
    this.setCurrentUser = V;

    function Q(ab) {
        w = new K.D.Ajax();
        X = $("divGuestAccount");
        i = $("divUserAccount");
        Y = new K.B.Modal({
            applyTo: "lblLogin",
            componentId: "loginModal",
            modalClass: "modalWindow accountModal",
            orientation: "right",
            onBeforeShow: function () {
                window.scroll(0, 0);
                this.setContent(k)
            },
            onShowComplete: L
        });
        J = new K.B.Modal({
            applyTo: "lblSignUp",
            componentId: "signupModal",
            modalClass: "modalWindow accountModal",
            orientation: "right",
            onBeforeShow: function () {
                window.scroll(0, 0);
                this.setContent(T)
            },
            onShowComplete: U
        });
        ab.loginModal = Y;
        ab.signupModal = J
    }
    Q(this)
}
function Kit() {
    var a, e = [],
        h = "             <div class='patternModalHeader'><label class='lblModalTitle'>Kits</label><label class='lblModalButtons' title='close' onclick='sampler.kitModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divKitWrapper' class='modalWrapper'>                     [kits]                 </div>             </div>";

    function c(j) {
        if (typeof(j) == "object") {
            var i = "",
                k;
            for (k = 0; k < j.length; k++) {
                i += "<div class='modalWrapperRow' onclick='sampler.setSystemKit(\"" + j[k]["name"] + '",' + j[k]["id"] + ");'>" + j[k]["name"] + "</div>"
            }
            h = h.replace(/\[kits\]/, i)
        } else {
            return false
        }
    }
    this.setAvailableKits = c;

    function d(j) {
        var i;
        for (i in e) {
            if (e[i].id == j) {
                return i
            }
        }
        return false
    }

    // HANDLE LOADING THE RESPONSES
    function b(o, s, t, m, v, q, k) {
        if (o.success) {
            var l = D(o.response),
                r, i = "",
                j;
            $("currentKit").innerHTML = s;
            if (m == "ogg") {
                i = "ogg"
            } else {
                if (m == "mp3") {
                    i = "mpeg"
                }
            }
            for (j = 0; j < v; j++) {
                q[j].innerHTML = "";
                k[j].setSrc("");
                r = l[j];

                ////console.log( r );
                ////console.log( o, s, t, m, v, q, k );

								if ( r && r.channel ) {

	                Emit.data.push(r);

                  q[r.channel].innerHTML = r.name;

                  // sets the audio elements source
                  k[r.channel].setSrc("data:audio/" + i + ";base64," + r.src)
                }
            }
            if (!d(t)) {
                e.push({
                    id: t,
                    val: o
                })
            }
            a.hide()
        } else {
            return false
        }
    }
    function f(l, q, k, n, i, j) {
        a.setContent("<div style='width: 16px; height: 16px; margin: 10px auto;'><img src='includes/images/ajax-loader.gif' /></div>");
        var o = new K.D.Ajax(),
            m = d(q);
        if (m) {
            b(e[m].val, l, q, k, n, i, j);
            return
        }
        o.request({
            url: "api/kit.php",
            method: "post",
            parameters: {
                cmd: "getKitChannels",
                id: q,
                format: k
            },
            handler: function (r) {
                //console.log( "request response", r );

                //console.log( r, l, q, k, n, i, j );
                b(r, l, q, k, n, i, j)
            }
        })
    }
    this.setSystemKit = f;

    function g(i) {
        a = new K.B.Modal({
            applyTo: "aKitModal",
            componentId: "kitModal",
            modalClass: "modalWindow kitModal",
            closeOnBlur: true,
            onBeforeShow: function () {
                this.setContent(h)
            }
        });
        i.kitModal = a
    }
    g(this)
}
function Pattern() {
    var r, aa, ah, t, x, o, w, ak, b, O, V, aj, q, F, ab, j, d, i, c, Z = false,
        Q = [],
        m = [],
        e, U = "The email address you provided was not valid.",
        y = "             <div class='patternModalHeader'><label class='lblModalTitle'>Download Loop</label><label class='lblModalButtons' title='close' onclick='sampler.downloadPatternModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <form action='download.php' method='post' onsubmit='return false;' name='frmDownloadPattern' id='frmDownloadPattern'>                     <label class='labelText'>Steps:</label><br />                     <input type='text' name='stepStart' id='txtStepStart' maxlength='2' style='width: 30px;' value='1' /> - <input type='text' name='stepEnd' id='txtStepEnd' maxlength='2' style='width: 30px;' /> <b>X</b>                    <select name='loopCount' id='loopCount'>                         <option value='1'>1</option>                         <option value='2'>2</option>                         <option value='4' selected='selected'>4</option>                         <option value='8'>8</option>                         <option value='16'>16</option>                     </select> <b>loops</b><hr />                     <label class='labelText'>Format:</label><br />                     <input type='radio' name='format' checked='checked' value='wav' /> wav<br />                     <input type='radio' name='format' value='ogg' /> ogg<br />                     <input type='radio' name='format' value='mp3' /> mp3 (may not loop properly)<br /><br />                     <input type='hidden' name='sequence' id='sequence' />                     <input type='submit' id='cmdDownloadPattern' value='download' /> <img id='imgDownloadLoader' style='display: none;' src='includes/images/ajax-loader.gif' />                 </form>                 <br /><b>- OR -</b><br /><br />                 <img src='includes/images/small-connect-with-sc.png' id='imgSoundcloudUpload' style='cursor: pointer;' />             </div>",
        ae = "             <div class='patternModalHeader'><label class='lblModalTitle'>Download Loop</label><label class='lblModalButtons' title='close' onclick='sampler.downloadPatternModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divIframeLoading' style='width: 100%; height: 400px; background:url(includes/images/ajax-loader-large.gif) no-repeat center center;'></div>                <iframe id='soundcloudIframe' style='display: none; width: 100%; height: 400px; border: none;'></iframe>             </div>",
        h = "             <div class='patternModalHeader'><label class='lblModalTitle'>Save Pattern</label><label class='lblModalButtons' title='close' onclick='sampler.savePatternModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divSavePatternMesg' class='error'></div>                 <div id='divGuestPatternSaveWrapper' class='guestWrapper'>                     Log in now to save your pattern.<br /><br />                     <label class='lblLink' onclick='sampler.loginModal.show();'>login</label>&nbsp;&nbsp;&nbsp;&nbsp;<label class='lblLink' onclick='sampler.signupModal.show();'>sign up</label><br /><br /><br />                     <span style='color: #ff0000;'>Don't worry-</span> <span style='font-weight: normal;'>If you haven't created an account yet, whatever you're working on right now will be automatically saved in your account when you sign up.</span>                 </div>                 <div id='divUserPatternSaveWrapper'>                     <form action='' onsubmit='return false;' id='frmSavePattern'>                         <label class='labelText'>Name:</label>                         <input type='text' id='txtSavePattern' class='modalText' /><br /><br />                         <input type='submit' id='cmdSavePattern' value='save' /> <img id='imgSavePatternLoader' style='display: none;' src='includes/images/ajax-loader.gif' /> <input type='button' id='cmdCancelSave'  value='cancel' />                     </form>                 </div>             </div>",
        Y = "             <div id='divPatternMesg' class='error' style='display: none;'></div>             <div class='patternModalHeader'><label class='lblModalTitle'>Patterns</label><label class='lblModalButtons' title='close' onclick='sampler.patternModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div class='patternHeader'>My Patterns</div>                 <div id='divGuestPatternWrapper' class='guestWrapper'>                     Log in now to create and edit your own patterns.<br /><br />                     <label class='lblLink' onclick='sampler.loginModal.show();'>login</label>&nbsp;&nbsp;&nbsp;&nbsp;<label class='lblLink' onclick='sampler.signupModal.show();'>sign up</label>                 </div>                 <div id='divMyPatternWrapper' style='display: none;'>                     <div id='divWithSelectedPatterns'>                         Select: <label id='lblSelectAll' class='lblLink' style='font-weight: normal;'>all</label>, <label id='lblSelectNone' class='lblLink' style='font-weight: normal;'>none</label>&nbsp;&nbsp;|&nbsp;&nbsp;                         With Selected:                         <input type='button' id='cmdRenamePattern' value='rename' class='withSelectedBtn' />                         <input type='button' id='cmdDeletePattern' value='delete' class='withSelectedBtn' />                     </div>                     <div id='divUserPatterns' class='patternTable userPatternTable'></div>                 </div>                 <div class='patternHeader'>Preset Patterns</div>                 <div id='divPresetPatterns' class='patternTable presetPatternTable' style='margin-bottom: 0;'></div>             </div>";
    sharePatternModalContent = "             <div class='patternModalHeader'><label class='lblModalTitle'>Share Pattern</label><label class='lblModalButtons' title='close' onclick='sampler.sharePatternModal.hide();'>X</label></div>             <div class='patternModalWrapper'>                 <div id='divSharePatternMesg' class='error'></div>                 <form action='' onsubmit='return false;' id='frmSharePattern'>                     <div id='divGuestUser'>                         <label class='labelText'>Your email:</label><br />                         <input type='text' class='modalText' id='txtUserEmail' /><br /><br />                     </div>                     <label class='labelText'>Share with:<br /><span style='font-weight: normal;'>(separate multiple email addresses with commas)</span></label>                     <input type='text' id='txtShareWithEmail' class='modalText' /><br /><br />                     <input type='submit' id='cmdSharePattern' value='share' /> <img id='imgSharePatternLoader' style='display: none;' src='includes/images/ajax-loader.gif' /> <input type='button' id='cmdCancelShare'  value='cancel' />                 </form>             </div>";

    function g(ap, an, ar, am, ao, al, aq) {
        if (typeof(ap) == "number" && an) {
            if (an == "user") {
                ap = i.getRow(ap)
            } else {
                if (an == "system") {
                    ap = c.getRow(ap)
                }
            }
        }
        if (typeof(ap) == "object") {
            ar.run(function () {
                var au, at;
                at = new K.Util();
                if (typeof(ap) == "string") {
                    at.clone(D(ap), am)
                } else {
                    if (typeof(ap) == "object") {
                        at.clone(ap, am)
                    }
                }
                for (au in am.chVol) {
                    if (am.chVol[au]) {
                        ao[au].setValue(am.chVol[au])
                    }
                }
                al.setValue(parseInt(am.steps, 10));
                aq.setValue(parseInt(am.tempo, 10));
                sampler.setSystemKit(am.kit.name, parseInt(am.kit.id, 10));
                if (am.name) {
                    x.innerHTML = am.name
                }
            })
        }
    }
    this.setPattern = g;

    function ag(al) {
        Q = al
    }
    this.setUserPatternArr = ag;

    function z(al) {
        m = al
    }
    this.setSystemPatternArr = z;

    function l(al) {
        Z = al
    }
    this.setUserPatternDirtyFlag = l;

    function W() {
        var am = i.getSelectedRowCount(),
            al = false;
        if (am) {
            al = false
        } else {
            al = true
        }
        o.disabled = al;
        w.disabled = al;
        if (am > 1) {
            o.disabled = true
        }
    }
    function ac(am) {
        var al, ao, an;
        if (typeof(am.response) == "string") {
            al = D(am.response)
        } else {
            if (typeof(am.response) == "object") {
                al = am.response
            }
        }
        if (m.length) {
            al.data.system = m
        }
        if (al.success) {
            if (al.data.user) {
                Q = al.data.user;
                i = new K.D.Dataset();
                i.selectListener.add(W);
                ao = new K.B.Table({
                    applyTo: "divUserPatterns",
                    componentId: "tblUserPatterns",
                    tableDomId: "tblUserPatterns",
                    rowSelectedClass: "selectedTableRow",
                    data: i,
                    sortArrow: {
                        img: "includes/images/tblArrowSprite.png",
                        size: {
                            width: 14,
                            height: 14
                        },
                        up: {
                            x: 0,
                            y: 0
                        },
                        down: {
                            x: 0,
                            y: -14
                        }
                    },
                    columns: {
                        Select: {
                            width: 10,
                            title: " ",
                            selectRowCheckBox: true
                        },
                        Name: {
                            dataField: "name",
                            sortable: true,
                            width: 120,
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "user");\'>' + ap.val.name + "</div>"
                            }
                        },
                        Kit: {
                            dataField: "kit.name",
                            sortable: true,
                            width: 110,
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "user");\'>' + ap.val.kit.name + "</div>"
                            }
                        },
                        Tempo: {
                            dataField: "tempo",
                            sortable: true,
                            width: 60,
                            align: "right",
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "user");\'>' + ap.val.tempo + "</div>"
                            }
                        }
                    }
                });
                i.setData({
                    data: al.data.user,
                    sortObj: {
                        field: "name",
                        dir: "ASC"
                    }
                });
                W();
                Z = false
            }
            if (al.data.system) {
                m = al.data.system;
                c = new K.D.Dataset();
                an = new K.B.Table({
                    applyTo: "divPresetPatterns",
                    componentId: "tblSystemPatterns",
                    tableDomId: "tblSystemPatterns",
                    data: c,
                    sortArrow: {
                        img: "includes/images/tblArrowSprite.png",
                        size: {
                            width: 14,
                            height: 14
                        },
                        up: {
                            x: 0,
                            y: 0
                        },
                        down: {
                            x: 0,
                            y: -14
                        }
                    },
                    columns: {
                        Name: {
                            dataField: "name",
                            sortable: true,
                            width: 120,
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "system");\'>' + ap.val.name + "</div>"
                            }
                        },
                        Kit: {
                            dataField: "kit.name",
                            sortable: true,
                            width: 120,
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "system");\'>' + ap.val.kit.name + "</div>"
                            }
                        },
                        Tempo: {
                            dataField: "tempo",
                            sortable: true,
                            width: 60,
                            align: "right",
                            renderFn: function (ap) {
                                return "<div onclick='sampler.setPattern(" + ap.index + ', "system");\'>' + ap.val.tempo + "</div>"
                            }
                        }
                    }
                });
                c.setData({
                    data: al.data.system,
                    sortObj: {
                        field: "name",
                        dir: "ASC"
                    }
                })
            }
        } else {
            ak.innerHTML = al.mesg
        }
    }
    function v(ao, al) {
        var am = D(ao.response),
            an;
        if (am.success) {
            ak.style.display = "none";
            an = i.getSelected();
            an[0].data.name = al;
            i.selectAllRows(false);
            i.sort(this.sortCol);
            i.updateListener.fire();
            Q = i.data
        } else {
            ak.style.display = "block";
            ak.innerHTML = am.mesg
        }
    }
    function L(ao, al) {
        var am = D(ao.response),
            aq = 0,
            ap, an;
        if (am.success) {
            ak.style.display = "none";
            for (an in al) {
                if (al[an]) {
                    ap = al[an] - aq;
                    i.data.splice(ap, 1);
                    aq++
                }
            }
            i.selectAllRows(false);
            i.sort(this.sortCol);
            i.updateListener.fire();
            Q = i.data
        } else {
            ak.style.display = "block";
            ak.innerHTML = am.mesg
        }
    }
    function af(am) {
        var ao = i.getSelected(),
            ap, ar, av, al, an, au, at, aq;
        switch (am) {
        case "rename":
            if (ao.length == 1) {
                ap = ao[0].data.name;
                ar = prompt("New name:", ap);
                if (ar && ar != ap) {
                    e.request({
                        url: "api/pattern.php",
                        method: "post",
                        parameters: {
                            cmd: "rename",
                            from: ap,
                            to: ar
                        },
                        handler: function (aw) {
                            v(aw, ar)
                        }
                    })
                }
            }
            break;
        case "delete":
            if (ao) {
                if (confirm("Are you sure you want to delete the selected patterns?  This can't be undone!")) {
                    av = {
                        cmd: "delete",
                        items: ""
                    };
                    al = [];
                    an = [];
                    for (aq in ao) {
                        if (ao[aq]) {
                            au = ao[aq].index;
                            at = ao[aq].data.name;
                            al.push(au);
                            an.push(at)
                        }
                    }
                    av.items = an.join("|-|");
                    e.request({
                        url: "api/pattern.php",
                        method: "post",
                        parameters: av,
                        handler: function (aw) {
                            L(aw, al)
                        }
                    })
                }
            }
            break
        }
    }
    function ai() {
        var an, ao = {},
            al = $("divGuestPatternWrapper"),
            am = $("divMyPatternWrapper");
        ak = $("divPatternMesg");
        if (sampler.sessionExists()) {
            am.style.display = "block";
            al.style.display = "none";
            o = $("cmdRenamePattern");
            o.onclick = function () {
                af("rename")
            };
            w = $("cmdDeletePattern");
            w.onclick = function () {
                af("delete")
            };
            $("lblSelectAll").onclick = function () {
                i.selectAllRows(true)
            };
            $("lblSelectNone").onclick = function () {
                i.selectAllRows(false)
            };
            if (m.length) {
                an = "user";
                if (!Z) {
                    ao.response = {
                        success: true,
                        data: {
                            user: Q
                        }
                    };
                    ac(ao);
                    return
                }
            } else {
                an = "all"
            }
        } else {
            am.style.display = "none";
            al.style.display = "block";
            if (m.length) {
                ao.response = {
                    success: true,
                    data: {
                        system: m
                    }
                };
                ac(ao);
                return
            }
            an = "system"
        }
        e.request({
            url: "api/pattern.php",
            method: "post",
            parameters: {
                cmd: "get",
                type: an
            },
            handler: ac
        })
    }
    function k(ar, aq) {
        var am = D(ar.response),
            al, ao, an = sampler.getSequenceArr(),
            ap;
        if (am.success) {
            $("frmSavePattern").style.display = "none";
            F = $("divSavePatternMesg");
            F.className = "success";
            al = new K.Util();
            if (am.action == "added") {
                ao = {};
                al.clone(an, ao);
                ao.name = aq;
                Q.push(ao)
            } else {
                if (am.action == "updated") {
                    for (ap in Q) {
                        if (Q[ap].name == an.name) {
                            al.clone(an, Q[ap]);
                            break
                        }
                    }
                }
            }
        } else {
            j.style.display = "inline";
            d.style.display = "none"
        }
        F.style.display = "block";
        F.innerHTML = am.mesg
    }
    function T() {
        var am, an, ap = false,
            ao = ab.value,
            al;
        for (an in Q) {
            if (Q[an].name == ao) {
                ap = true;
                break
            }
        }
        if (ap) {
            al = confirm("A pattern with this name already exists.  Overwrite?");
            if (!al) {
                return
            }
        }
        j.style.display = "none";
        d.style.display = "inline";
        am = E(sampler.getSequenceArr());
        e.request({
            url: "api/pattern.php",
            method: "post",
            parameters: {
                cmd: "save",
                name: ao,
                sequence: am
            },
            handler: function (aq) {
                k(aq, ao)
            }
        })
    }
    function N() {
        var am = $("divGuestPatternSaveWrapper"),
            al = $("divUserPatternSaveWrapper");
        F = $("divSavePatternMesg");
        F.innerHTML = "";
        F.style.display = "none";
        if (sampler.sessionExists()) {
            am.style.display = "none";
            al.style.display = "block";
            $("frmSavePattern").onkeydown = S;
            ab = $("txtSavePattern");
            ab.value = $("currentPattern").innerHTML;
            ab.focus();
            j = $("cmdSavePattern");
            j.onclick = T;
            d = $("imgSavePatternLoader");
            $("cmdCancelSave").onclick = function () {
                aa.hide()
            }
        } else {
            al.style.display = "none";
            am.style.display = "block"
        }
    }
    function ad(am) {
        var al = D(am.response);
        if (al.success) {
            $("frmSharePattern").style.display = "none";
            b = $("divSharePatternMesg");
            b.className = "success"
        } else {
            cmdSharepattern.style.display = "inline";
            q.style.display = "none"
        }
        b.innerHTML = al.mesg
    }
    function f() {
        var al = "",
            am = "",
            ap = [],
            an, ao;
        if (O && !I(O.value)) {
            ap.push(U)
        }
        if (!V.value) {
            ap.push("You must provide at least one recipient")
        } else {
            an = V.value.split(",");
            for (ao in an) {
                if (!I(an[ao].replace(/^\s+|\s+$/g, ""))) {
                    ap.push("One or more of the recipient's addresses you provided is invalid");
                    break
                }
            }
        }
        if (ap.length) {
            b.innerHTML = ap.join("<br />");
            return false
        }
        if (O) {
            al = O.value
        } else {
            al = "[user]"
        }
        am = E(sampler.getSequenceArr());
        aj.style.display = "none";
        q.style.display = "inline";
        e.request({
            url: "api/pattern.php",
            method: "post",
            parameters: {
                cmd: "share",
                user: al,
                sequence: am,
                hash: M(al + am + Math.random()),
                recipients: V.value
            },
            handler: ad
        })
    }
    function J() {
        var al = $("divGuestUser");
        b = $("divSharePatternMesg");
        b.innerHTML = "";
        $("frmSharePattern").onkeydown = S;
        divShareUser = $("divShareUser");
        V = $("txtShareWithEmail");
        V.value = "";
        if (sampler.sessionExists()) {
            al.style.display = "none";
            O = "";
            V.focus()
        } else {
            al.style.display = "block";
            O = $("txtUserEmail");
            O.value = "";
            O.focus()
        }
        aj = $("cmdSharePattern");
        aj.onclick = f;
        q = $("imgSharePatternLoader");
        $("cmdCancelShare").onclick = function () {
            ah.hide()
        }
    }
    function n() {
        var al = window.onbeforeunload;
        $("cmdDownloadPattern").style.display = "none";
        $("imgDownloadLoader").style.display = "inline";
        window.onbeforeunload = "";
        $("sequence").value = E(sampler.getSequenceArr());
        $("frmDownloadPattern").submit();
        setTimeout(function () {
            window.onbeforeunload = al;
            sampler.downloadPatternModal.hide()
        }, 1000)
    }
    function a() {
        t.updateModalClass("modalWindow downloadModal");
        $("cmdDownloadPattern").onclick = n;
        $("imgSoundcloudUpload").onclick = X;
        $("txtStepEnd").value = sampler.getTotalSteps()
    }
    function X() {
        var am = $("txtStepStart").value,
            an = $("txtStepEnd").value,
            al = $("loopCount").value;
        t.updateModalClass("modalWindow soundcloudModal");
        t.setContent(ae);
        e.request({
            url: "download.php",
            method: "post",
            parameters: {
                stepStart: am,
                stepEnd: an,
                loopCount: al,
                format: "soundcloud",
                sequence: E(sampler.getSequenceArr())
            },
            handler: function (ap) {
                var ao = $("soundcloudIframe");
                ao.onload = function () {
                    $("divIframeLoading").style.display = "none";
                    ao.style.display = "block"
                };
                ao.src = ap.response
            }
        })
    }
    function s(al) {
        x = $("currentPattern");
        e = new K.D.Ajax();
        r = new K.B.Modal({
            applyTo: "aPatternModal",
            componentId: "patternModal",
            modalClass: "modalWindow patternModal",
            onBeforeShow: function () {
                this.setContent(Y)
            },
            onShowComplete: ai
        });
        aa = new K.B.Modal({
            applyTo: "divSavePattern",
            componentId: "savePatternModal",
            modalClass: "modalWindow accountModal",
            orientation: "right",
            onBeforeShow: function () {
                this.setContent(h)
            },
            onShowComplete: N
        });
        ah = new K.B.Modal({
            applyTo: "divSharePattern",
            componentId: "sharePatternModal",
            modalClass: "modalWindow accountModal",
            orientation: "right",
            onBeforeShow: function () {
                this.setContent(sharePatternModalContent)
            },
            onShowComplete: J
        });
        t = new K.B.Modal({
            applyTo: "divDownloadPattern",
            componentId: "downloadPatternModal",
            modalClass: "modalWindow downloadModal",
            orientation: "right",
            onBeforeShow: function () {
                this.setContent(y)
            },
            onShowComplete: a
        });
        al.patternModal = r;
        al.savePatternModal = aa;
        al.sharePatternModal = ah;
        al.downloadPatternModal = t
    }
    s(this)
}
function H(b, a) {
    return b.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
}
function A(c, a, b) {

    if (b || !H(c, a)) {
        c.className += " " + a
    }
}
function R(d, a, c) {
    var b = new RegExp("(\\s|^)" + a + "(\\s|$)");

    if (c || H(d, a)) {
        d.className = d.className.replace(b, " ")
    }
}
function $(a) {
    return document.getElementById(a)
}
function G(b) {
    var d, a = document.getElementsByTagName("*"),
        c = [];
    for (d = 0; d < a.length; d++) {
        if (H(a[d], b)) {
            c.push(a[d])
        }
    }
    return c
}
function E(b, a) {
    var g = [],
        c = (Object.prototype.toString.apply(b) === "[object Array]"),
        f, h, e, d;
    for (e in b) {
        if (b.hasOwnProperty(e)) {
            f = b[e];
            h = "";
            if (typeof f == "object") {
                if (c) {
                    g.push(E(f, true))
                } else {
                    h = '"' + e + '":' + E(f);
                    g.push(h)
                }
            } else {
                if (!a) {
                    h = '"' + e + '":'
                }
                if (typeof f == "number") {
                    h += f
                } else {
                    if (f === false) {
                        h += "false"
                    } else {
                        if (f === true) {
                            h += "true"
                        } else {
                            h += '"' + f + '"'
                        }
                    }
                }
                g.push(h)
            }
        }
    }
    d = g.join(",");
    if (c) {
        return "[" + d + "]"
    } else {
        return "{" + d + "}"
    }
}
function D(str) {
    var val;
    try {
        val = eval("(" + str + ")")
    } catch (err) {
        val = err
    }
    return val
}
function I(a) {
    if (a.match(/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i)) {
        return true
    } else {
        return false
    }
}
function S(a) {
    a.cancelBubble = true;
    if (a.S) {
        a.S()
    }
}
function M(t) {
    function X(b, a) {
        return (b << a) | (b >>> (32 - a))
    }
    function W(k, b) {
        var F, a, d, x, c;
        d = (k & 2147483648);
        x = (b & 2147483648);
        F = (k & 1073741824);
        a = (b & 1073741824);
        c = (k & 1073741823) + (b & 1073741823);
        if (F & a) {
            return (c ^ 2147483648 ^ d ^ x)
        }
        if (F | a) {
            if (c & 1073741824) {
                return (c ^ 3221225472 ^ d ^ x)
            } else {
                return (c ^ 1073741824 ^ d ^ x)
            }
        } else {
            return (c ^ d ^ x)
        }
    }
    function s(a, c, b) {
        return (a & c) | ((~a) & b)
    }
    function r(a, c, b) {
        return (a & b) | (c & (~b))
    }
    function q(a, c, b) {
        return (a ^ c ^ b)
    }
    function n(a, c, b) {
        return (c ^ (a | (~b)))
    }
    function w(al, F, ap, ao, k, am, an) {
        al = W(al, W(W(s(F, ap, ao), k), an));
        return W(X(al, am), F)
    }
    function f(al, F, ap, ao, k, am, an) {
        al = W(al, W(W(r(F, ap, ao), k), an));
        return W(X(al, am), F)
    }
    function T(al, F, ap, ao, k, am, an) {
        al = W(al, W(W(q(F, ap, ao), k), an));
        return W(X(al, am), F)
    }
    function v(al, F, ap, ao, k, am, an) {
        al = W(al, W(W(n(F, ap, ao), k), an));
        return W(X(al, am), F)
    }
    function e(k) {
        var al, d = k.length,
            c = d + 8,
            b = (c - (c % 64)) / 64,
            F = (b + 1) * 16,
            am = Array(F - 1),
            a = 0,
            x = 0;
        while (x < d) {
            al = (x - (x % 4)) / 4;
            a = (x % 4) * 8;
            am[al] = (am[al] | (k.charCodeAt(x) << a));
            x++
        }
        al = (x - (x % 4)) / 4;
        a = (x % 4) * 8;
        am[al] = am[al] | (128 << a);
        am[F - 2] = d << 3;
        am[F - 1] = d >>> 29;
        return am
    }
    function O(c) {
        var b = "",
            d = "",
            k, a;
        for (a = 0; a <= 3; a++) {
            k = (c >>> (a * 8)) & 255;
            d = "0" + k.toString(16);
            b = b + d.substr(d.length - 2, 2)
        }
        return b
    }
    function V(b) {
        b = b.replace(/\r\n/g, "\n");
        var a = "",
            k, d;
        for (k = 0; k < b.length; k++) {
            d = b.charCodeAt(k);
            if (d < 128) {
                a += String.fromCharCode(d)
            } else {
                if ((d > 127) && (d < 2048)) {
                    a += String.fromCharCode((d >> 6) | 192);
                    a += String.fromCharCode((d & 63) | 128)
                } else {
                    a += String.fromCharCode((d >> 12) | 224);
                    a += String.fromCharCode(((d >> 6) & 63) | 128);
                    a += String.fromCharCode((d & 63) | 128)
                }
            }
        }
        return a
    }
    var Q = Array(),
        ab, h, U, y, g, ak, aj, ai, ah, ae = 7,
        ac = 12,
        Z = 17,
        Y = 22,
        N = 5,
        L = 9,
        J = 14,
        z = 20,
        o = 4,
        m = 11,
        l = 16,
        j = 23,
        ag = 6,
        af = 10,
        ad = 15,
        aa = 21,
        i;
    t = V(t);
    Q = e(t);
    ak = 1732584193;
    aj = 4023233417;
    ai = 2562383102;
    ah = 271733878;
    for (ab = 0; ab < Q.length; ab += 16) {
        h = ak;
        U = aj;
        y = ai;
        g = ah;
        ak = w(ak, aj, ai, ah, Q[ab + 0], ae, 3614090360);
        ah = w(ah, ak, aj, ai, Q[ab + 1], ac, 3905402710);
        ai = w(ai, ah, ak, aj, Q[ab + 2], Z, 606105819);
        aj = w(aj, ai, ah, ak, Q[ab + 3], Y, 3250441966);
        ak = w(ak, aj, ai, ah, Q[ab + 4], ae, 4118548399);
        ah = w(ah, ak, aj, ai, Q[ab + 5], ac, 1200080426);
        ai = w(ai, ah, ak, aj, Q[ab + 6], Z, 2821735955);
        aj = w(aj, ai, ah, ak, Q[ab + 7], Y, 4249261313);
        ak = w(ak, aj, ai, ah, Q[ab + 8], ae, 1770035416);
        ah = w(ah, ak, aj, ai, Q[ab + 9], ac, 2336552879);
        ai = w(ai, ah, ak, aj, Q[ab + 10], Z, 4294925233);
        aj = w(aj, ai, ah, ak, Q[ab + 11], Y, 2304563134);
        ak = w(ak, aj, ai, ah, Q[ab + 12], ae, 1804603682);
        ah = w(ah, ak, aj, ai, Q[ab + 13], ac, 4254626195);
        ai = w(ai, ah, ak, aj, Q[ab + 14], Z, 2792965006);
        aj = w(aj, ai, ah, ak, Q[ab + 15], Y, 1236535329);
        ak = f(ak, aj, ai, ah, Q[ab + 1], N, 4129170786);
        ah = f(ah, ak, aj, ai, Q[ab + 6], L, 3225465664);
        ai = f(ai, ah, ak, aj, Q[ab + 11], J, 643717713);
        aj = f(aj, ai, ah, ak, Q[ab + 0], z, 3921069994);
        ak = f(ak, aj, ai, ah, Q[ab + 5], N, 3593408605);
        ah = f(ah, ak, aj, ai, Q[ab + 10], L, 38016083);
        ai = f(ai, ah, ak, aj, Q[ab + 15], J, 3634488961);
        aj = f(aj, ai, ah, ak, Q[ab + 4], z, 3889429448);
        ak = f(ak, aj, ai, ah, Q[ab + 9], N, 568446438);
        ah = f(ah, ak, aj, ai, Q[ab + 14], L, 3275163606);
        ai = f(ai, ah, ak, aj, Q[ab + 3], J, 4107603335);
        aj = f(aj, ai, ah, ak, Q[ab + 8], z, 1163531501);
        ak = f(ak, aj, ai, ah, Q[ab + 13], N, 2850285829);
        ah = f(ah, ak, aj, ai, Q[ab + 2], L, 4243563512);
        ai = f(ai, ah, ak, aj, Q[ab + 7], J, 1735328473);
        aj = f(aj, ai, ah, ak, Q[ab + 12], z, 2368359562);
        ak = T(ak, aj, ai, ah, Q[ab + 5], o, 4294588738);
        ah = T(ah, ak, aj, ai, Q[ab + 8], m, 2272392833);
        ai = T(ai, ah, ak, aj, Q[ab + 11], l, 1839030562);
        aj = T(aj, ai, ah, ak, Q[ab + 14], j, 4259657740);
        ak = T(ak, aj, ai, ah, Q[ab + 1], o, 2763975236);
        ah = T(ah, ak, aj, ai, Q[ab + 4], m, 1272893353);
        ai = T(ai, ah, ak, aj, Q[ab + 7], l, 4139469664);
        aj = T(aj, ai, ah, ak, Q[ab + 10], j, 3200236656);
        ak = T(ak, aj, ai, ah, Q[ab + 13], o, 681279174);
        ah = T(ah, ak, aj, ai, Q[ab + 0], m, 3936430074);
        ai = T(ai, ah, ak, aj, Q[ab + 3], l, 3572445317);
        aj = T(aj, ai, ah, ak, Q[ab + 6], j, 76029189);
        ak = T(ak, aj, ai, ah, Q[ab + 9], o, 3654602809);
        ah = T(ah, ak, aj, ai, Q[ab + 12], m, 3873151461);
        ai = T(ai, ah, ak, aj, Q[ab + 15], l, 530742520);
        aj = T(aj, ai, ah, ak, Q[ab + 2], j, 3299628645);
        ak = v(ak, aj, ai, ah, Q[ab + 0], ag, 4096336452);
        ah = v(ah, ak, aj, ai, Q[ab + 7], af, 1126891415);
        ai = v(ai, ah, ak, aj, Q[ab + 14], ad, 2878612391);
        aj = v(aj, ai, ah, ak, Q[ab + 5], aa, 4237533241);
        ak = v(ak, aj, ai, ah, Q[ab + 12], ag, 1700485571);
        ah = v(ah, ak, aj, ai, Q[ab + 3], af, 2399980690);
        ai = v(ai, ah, ak, aj, Q[ab + 10], ad, 4293915773);
        aj = v(aj, ai, ah, ak, Q[ab + 1], aa, 2240044497);
        ak = v(ak, aj, ai, ah, Q[ab + 8], ag, 1873313359);
        ah = v(ah, ak, aj, ai, Q[ab + 15], af, 4264355552);
        ai = v(ai, ah, ak, aj, Q[ab + 6], ad, 2734768916);
        aj = v(aj, ai, ah, ak, Q[ab + 13], aa, 1309151649);
        ak = v(ak, aj, ai, ah, Q[ab + 4], ag, 4149444226);
        ah = v(ah, ak, aj, ai, Q[ab + 11], af, 3174756917);
        ai = v(ai, ah, ak, aj, Q[ab + 2], ad, 718787259);
        aj = v(aj, ai, ah, ak, Q[ab + 9], aa, 3951481745);
        ak = W(ak, h);
        aj = W(aj, U);
        ai = W(ai, y);
        ah = W(ah, g)
    }
    i = O(ak) + O(aj) + O(ai) + O(ah);

    //console.log( Q );
    return i.toLowerCase()
}
K.D.Ajax = function () {
    this._getXMLHttpRequest()
};
K.D.Ajax.prototype = {
    _http_request: false,
    request: function (a) {
        var c = this,
            b;
        a.method = a.method.toLowerCase();
        this._http_request.onreadystatechange = function () {
            c._handleResponse(a.handler)
        };
        a.parameters = this._objToPostStr(a.parameters);
        if (a.method == "get" && a.parameters) {
            a.url += "?" + a.parameters
        }
        this._http_request.open(a.method, a.url, true);
        if (a.method == "post") {
            b = a.parameters;
            this._http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this._http_request.setRequestHeader("Content-length", a.parameters.length);
            this._http_request.setRequestHeader("Connection", "close")
        }
        this._http_request.send(b)
    },
    submitForm: function (d) {
        var b = d.form.elements,
            a = {},
            c;
        for (c in b) {
            if (b[c].name && b[c].value) {
                a[b[c].name] = encodeURI(b[c].value)
            }
        }
        this.request({
            url: d.url,
            method: d.method,
            parameters: a,
            handler: d.handler
        })
    },
    _getXMLHttpRequest: function () {
        if (window.XMLHttpRequest) {
            this._http_request = new XMLHttpRequest();
            if (this._http_request.overrideMimeType) {
                this._http_request.overrideMimeType("text/html")
            }
        } else {
            if (window.ActiveXObject) {
                try {
                    this._http_request = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (a) {
                    this._http_request = new ActiveXObject("Microsoft.XMLHTTP")
                }
            }
        }
        if (!this._http_request) {
            return false
        }
    },
    _objToPostStr: function (b) {
        if (typeof(b) == "object") {
            var a = "",
                c;
            for (c in b) {
                if (b[c]) {
                    a += c + "=" + escape(b[c]) + "&"
                }
            }
            a = a.replace(/\&$/, "");
            return a
        } else {
            return b
        }
    },
    _handleResponse: function (a) {
        if (this._http_request.readyState == 4) {
            if (this._http_request.status == 200) {
                a({
                    success: true,
                    response: this._http_request.responseText
                })
            } else {
                a({
                    success: false
                })
            }
        }
    }
};
K.D.Dataset = function (a) {

  //console.log( "Dataset fire" );
    this.updateListener = new K.Util.Listener();
    this.selectListener = new K.Util.Listener();
    this.sortCol = [];
    if (a) {
        this.setData(a)
    }
};
K.D.Dataset.prototype = {
    data: [],
    setData: function (b) {


        var a = new K.Util();
        this.data = [];
        this.alwaysOnTop = {};
        a.clone(b.data, this.data);
        if (b.alwaysOnTop) {
            a.clone(b.alwaysOnTop, this.alwaysOnTop)
        }
        if (b.sortObj) {
            this.sort(b.sortObj)
        } else {
            this.sortCol = [];
            this.updateListener.fire()
        }
    },
    sort: function (c) {
        if (!c) {
            c = {}
        }
        var d = this,
            b = c.field,
            a = c.dir;
        if (!b && !a) {
            if (this.sortCol.length) {
                b = this.sortCol[0];
                a = this.sortCol[1]
            } else {
                b = this.getColumns()[0];
                a = "ASC"
            }
        } else {
            if (b && a == "toggle") {
                if (b == this.sortCol[0]) {
                    a = (this.sortCol[1] == "ASC") ? a = "DESC" : a = "ASC"
                } else {
                    a = "ASC"
                }
            }
        }
        this.data.sort(function (g, f) {
            var l = 0,
                i, k = [],
                h = b.split("."),
                e, j;
            if (a == "DESC") {
                l = 2
            }
            k[0] = g[h[0]];
            for (e = 1; e < h.length; e++) {
                k[0] = k[0][h[e]]
            }
            if (typeof(g[b]) == "string") {
                k[0] = k[0].toLowerCase()
            }
            k[1] = f[h[0]];
            for (e = 1; e < h.length; e++) {
                k[1] = k[1][h[e]]
            }
            if (typeof(f[b]) == "string") {
                k[1] = k[1].toLowerCase()
            }
            if (d.alwaysOnTop) {
                for (j in d.alwaysOnTop) {
                    if (g[j] == d.alwaysOnTop[j] && f[j] == d.alwaysOnTop[j]) {
                        i = ((k[0] < k[1]) ? (-1 + l) : (k[0] > k[1]) ? (1 - l) : 0)
                    } else {
                        if (g[j] == d.alwaysOnTop[j]) {
                            i = -1;
                            break
                        } else {
                            if (f[j] == d.alwaysOnTop[j]) {
                                i = 1;
                                break
                            }
                        }
                    }
                }
            }
            if (!i) {
                i = ((k[0] < k[1]) ? (-1 + l) : (k[0] > k[1]) ? (1 - l) : 0)
            }
            return i
        });
        this.sortCol = [b, a];
        this.updateListener.fire()
    },
    getColumns: function () {
        var c = [],
            b = this.data[0],
            a;
        for (a in b) {
            if (b[a]) {
                c.push(a)
            }
        }
        return c
    },
    getRowCount: function () {
        return this.data.length
    },
    getRow: function (a) {
        return this.data[a]
    },
    getSelected: function () {
        var b = [],
            c, a = this.getRowCount(),
            d;
        for (d = 0; d < a; d++) {
            c = this.rowSelected(d, "", true);
            if (c) {
                b.push({
                    index: d,
                    data: this.getRow(d)
                })
            }
        }
        return b
    },
    getSelectedRowCount: function () {
        var c, b = 0,
            a = this.getRowCount(),
            d = 0;
        for (d = 0; d < a; d++) {
            c = this.rowSelected(d, "", true);
            if (c) {
                b++
            }
        }
        return b
    },
    selectAllRows: function (a, c) {
        var b;
        for (b = 0; b < this.getRowCount(); b++) {
            this.rowSelected(b, a, true)
        }
        if (!c) {
            this.selectListener.fire()
        }
    },
    rowSelected: function (b, a, c) {
        if (a !== true && a !== false) {
            return this.getRow(b)._rowSelected
        } else {
            this.getRow(b)._rowSelected = a
        }
        if (!c) {
            this.selectListener.fire()
        }
    }
};
K.Util = function () {};
K.Util.prototype = {
    printObj: function (b) {
        var a = "",
            c;
        a += "<table>";
        for (c in b) {
            if (b[c]) {
                a += "<tr><td>" + c + ":&nbsp;&nbsp</td><td>";
                if (typeof(b[c]) == "object") {
                    a += this.printObj(b[c])
                } else {
                    a += b[c]
                }
                a += "</td></td>"
            }
        }
        a += "</table>";
        return a
    },
    toEl: function (a) {
        if (typeof(a) == "string") {
            return document.getElementById(a)
        } else {
            return a
        }
    },
    clone: function (d, c, a) {
        var b;
        if (!a) {
            a = {}
        }
        for (b in d) {
            if (a[b] != "skip") {
                if (typeof(d[b]) == "object" && a[b] != "norecurse") {
                    if (d[b].constructor == Array.prototype.constructor) {
                        c[b] = []
                    } else {
                        c[b] = {}
                    }
                    this.clone(d[b], c[b], a)
                } else {
                    c[b] = d[b]
                }
            }
        }
    },
    getTargID: function (b) {
        if (typeof(b) == "object") {
            var a;
            if (b.target) {
                a = b.target
            } else {
                if (b.srcElement) {
                    a = b.srcElement
                }
            }
            if (a.nodeType == 3) {
                a = a.parentNode
            }
            return a.id
        } else {
            return false
        }
    },
    getRadioVal: function (a) {
        var b;
        a = this.toEl(a);
        a = a.getElementsByTagName("input");
        for (b = 0; b < a.length; b++) {
            if (a[b].type == "radio" && a[b].checked) {
                return a[b].value
            }
        }
    }
};
K.Util.Listener = function () {
    this.eventStack = []
};
K.Util.Listener.prototype = {
    add: function (a) {
        this.eventStack.push(a)
    },
    clear: function () {
        this.eventStack = []
    },
    fire: function () {

      //console.log( "fire" );
        var a;
        for (a = 0; a < this.eventStack.length; a++) {
            this.eventStack[a]()
        }
    }
};
K.B.Table = function (a) {
    var b = this;
    this.util = new K.Util();
    this.util.clone(a, this, {
        data: "norecurse",
        applyTo: "norecurse"
    });
    K.C[this.componentId] = this;
    if (this.applyTo) {
        this.applyTo = this.util.toEl(this.applyTo)
    } else {
        alert("table: 'applyTo' property not defined.  Check documentation.");
        return
    }
    this.renderTable();
    this.data.updateListener.add(function () {
        b._setSortArrow()
    });
    this.data.updateListener.add(function () {
        b.renderData()
    });
    this.data.selectListener.add(function () {
        b.renderData()
    })
};
K.B.Table.prototype = {
    _tableRendered: false,
    renderTable: function (c) {
        if ((!this._tableRendered || c === true)) {
            var f, b, e, d, a = "<table id='" + this.tableDomId + "'><thead><tr>";
            for (f in this.columns) {
                if (this.columns[f]) {
                    b = this.columns[f];
                    if (!b.align) {
                        b.align = "left"
                    }
                    a += "<th style='width: " + b.width + "px; text-align: " + b.align + ";'>";
                    if (b.title) {
                        e = b.title
                    } else {
                        e = f
                    }
                    if (b.sortable) {
                        if (b.align == "center") {
                            d = "margin: 0 auto;"
                        } else {
                            d = "float: " + b.align
                        }
                        a += "<div style='overflow: hidden; " + d + ";'><div style='float: left; cursor: pointer;'>" + e + "</div>";
                        if (this.sortArrow) {
                            a += "<div style='float: left; display: none; cursor: pointer; margin-left: 1px; width: " + this.sortArrow.size.width + "px; height: " + this.sortArrow.size.width + "px; background-image: url(" + this.sortArrow.img + ");'></div>"
                        }
                        a += "</div></th>"
                    } else {
                        a += e
                    }
                }
            }
            a += "</tr></thead></table><div id='" + this.tableDomId + "_tBodyContents' style='display: none; width: 0px; height: 0px;'></div>";
            this.applyTo.innerHTML = a;
            this._tableRendered = true
        }
    },
    _setSortArrow: function () {
        var g = 0,
            c, d, b = {
                DESC: "up",
                ASC: "down"
            },
            e = this.applyTo.getElementsByTagName("th"),
            f, a;
        for (f in this.columns) {
            if (this.columns[f]) {
                c = this.columns[f];
                d = e[g].childNodes[0];
                if (c.sortable && c.dataField) {
                    for (a = 0; a < d.childNodes.length; a++) {
                        d.childNodes[a].onclick = this._makeSortFn(c.dataField)
                    }
                    d = d.childNodes[1].style;
                    if (c.dataField == this.data.sortCol[0]) {
                        d.display = "block";
                        d.backgroundPosition = this.sortArrow[b[this.data.sortCol[1]]].x + "px " + this.sortArrow[b[this.data.sortCol[1]]].y + "px"
                    } else {
                        d.display = "none"
                    }
                }
                g++
            }
        }
    },
    renderData: function () {
        var j, e, a, d, c, g, f, h = "<table><tbody>",
            i, b;
        for (c = 0; c < this.data.getRowCount(); c++) {
            j = this.data.getRow(c);
            h += "<tr>";
            for (a in this.columns) {
                if (this.columns[a]) {
                    d = this.columns[a];
                    if (d.dataField) {
                        f = d.dataField.split(".");
                        e = j[f[0]];
                        for (g = 1; g < f.length; g++) {
                            e = e[f[g]]
                        }
                    } else {
                        e = ""
                    }
                    h += "<td style='text-align: " + d.align + ";'>";
                    if (d.renderFn) {
                        h += d.renderFn({
                            val: j,
                            index: c,
                            scope: this
                        })
                    } else {
                        if (d.selectRowCheckBox) {
                            h += "<input type='checkbox' />"
                        } else {
                            h += e
                        }
                    }
                    h += "</td>"
                }
            }
            h += "</tr>"
        }
        h += "</tbody></table>";
        i = this.applyTo.childNodes[0];
        b = this.applyTo.childNodes[1];
        b.innerHTML = h;
        if (i.childNodes.length > 1) {
            i.removeChild(i.childNodes[1])
        }
        i.appendChild(b.firstChild.firstChild);
        this._setSelectedRows()
    },
    _setSelectedRows: function () {
        var a = this.applyTo.childNodes[0].childNodes[1],
            e, d, g, f, c, b;
        for (g = 0; g < this.data.getRowCount(); g++) {
            e = a.childNodes[g];
            b = 0;
            for (f in this.columns) {
                if (this.columns[f]) {
                    c = this.columns[f];
                    if (c.selectRowCheckBox) {
                        d = e.childNodes[b].childNodes[0];
                        if (this.data.rowSelected(g)) {
                            e.className += " " + this.rowSelectedClass;
                            d.checked = true
                        }
                        d.onclick = this._makeSelectFn(d, g)
                    }
                    b++
                }
            }
        }
    },
    _selectRow: function (a, c) {
        var b;
        if (a.checked) {
            b = true
        } else {
            b = false
        }
        this.data.rowSelected(c, b)
    },
    _makeSelectFn: function (a, c) {
        var b = this;
        return function () {
            b._selectRow(a, c)
        }
    },
    _makeSortFn: function (a) {
        var b = this;
        return function () {
            b._sortFn(a)
        }
    },
    _sortFn: function (a) {
        this.data.sort({
            field: a,
            dir: "toggle"
        })
    }
};
K.B.Modal = function (a) {
    var c = this;
    this.util = new K.Util();
    this.util.clone(a, this);
    K.C[this.componentId] = this;
    if (this.applyTo) {
        this.applyTo = this.util.toEl(this.applyTo)
    } else {
        alert("table: 'applyTo' property not defined.  Check documentation.");
        return
    }
    this._initModal();
    this.applyTo.onmousedown = function (d) {
        c.toggleModal(d, c);
        return false
    };

    function b(d) {
        if (d._modalActive) {
            d._setModalPosition(d)
        }
    }
    window.addEventListener("resize", function () {
        b(c)
    }, false)
};
K.B.Modal.prototype = {
    content: "",
    orientation: "left",
    modalClass: "",
    closeOnBlur: false,
    onBeforeShow: function () {},
    onShowComplete: function () {},
    _isModal: true,
    toggleModal: function (b, a) {
        if (this._modalActive) {
            a.hide()
        } else {
            a.show(b)
        }
    },
    hide: function () {
        this._modalEl.style.display = "none";
        this._modalActive = false
    },
    show: function (d) {
        var g = this,
            a, c, f;
        for (a in K.C) {
            if (K.C[a]) {
                c = a;
                f = K.C[c];
                if (f._isModal && f != this) {
                    f.hide()
                }
            }
        }
        this.onBeforeShow();
        this._setModalPosition(this);
        this._modalEl.style.display = "block";
        this._modalActive = true;
        this.onShowComplete();

        function b(i) {
            var h = g._findElPos(g._modalEl);
            if (!((i.clientX >= h.left && i.clientX <= (h.left + g._modalEl.offsetWidth)) && (i.clientY >= h.top && i.clientY <= (h.top + g._modalEl.offsetHeight)))) {
                g.hide();
                this.removeEventListener("mousedown", b, false)
            }
        }
        if (this.closeOnBlur) {
            d.cancelBubble = true;
            if (d.S) {
                d.S()
            }
            window.addEventListener("mousedown", b, false)
        }
    },
    setContent: function (a) {
        this._modalEl.innerHTML = a
    },
    updateModalClass: function (a) {
        this._modalEl.className = a;
        this._modalDimensions = {
            width: this._modalEl.offsetWidth,
            height: this._modalEl.offsetHeight
        };
        this._setModalPosition(this)
    },
    _initModal: function () {
        var a = document.createElement("div");
        a.className = this.modalClass;
        a.style.position = "absolute";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        this._modalEl = a;
        this._modalDimensions = {
            width: this._modalEl.offsetWidth,
            height: this._modalEl.offsetHeight
        };
        this.hide();
        this._modalEl.style.visibility = "visible";
        this.setContent(this.content)
    },
    _setModalPosition: function (a) {
        var b = a._findElPos(a.applyTo);
        if (a.orientation == "left") {
            a._modalEl.style.left = b.left + "px"
        } else {
            if (a.orientation == "right") {
                a._modalEl.style.left = (b.left - a._modalDimensions.width + a.applyTo.offsetWidth) + "px"
            }
        }
        a._modalEl.style.top = (b.top + a.applyTo.offsetHeight) + "px"
    },
    _findElPos: function (a) {
        var b = {
            left: 0,
            top: 0
        };
        do {
            b.left += a.offsetLeft;
            b.top += a.offsetTop;
            a = a.offsetParent
        } while (a);
        return b
    }
};

function B(a) {
    var c = this,
        b;
    if (a) {
        for (b in a) {
            if (a[b]) {
                this[b] = a[b]
            }
        }
        if (this.container && typeof(this.container) != "object") {
            alert("Invalid Container");
            return
        }
    } else {
        alert("Invalid Config");
        return
    }
    this.render();
    this.setValue(this.initValue);
    this.textEl.onkeydown = function (d) {

        if (!d) {
            d = window.event
        }
        if (!d || !((d.keyCode >= 48 && d.keyCode <= 57) || (d.keyCode >= 96 && d.keyCode <= 105) || (d.keyCode >= 35 && d.keyCode <= 40) || (d.keyCode == 8) || (d.keyCode == 46))) {
            return false
        }
    };
    this.textEl.onchange = function () {
        c.changeValue(c)
    };
    this.incEl.onmousedown = function () {
        c.incValue(c);
        return false
    };
    this.decEl.onmousedown = function () {
        c.decValue(c);
        return false
    }
}
B.prototype = {
    btnWidth: 25,
    minValue: 0,
    maxValue: 100,
    initValue: 50,
    txtPadding: 5,
    clickDelay: 500,
    clickTimeout: 80,
    trigger: true,
    maxLength: 0,
    title: "",
    bodyClass: "",
    txtClass: "",
    incBtnClass: "",
    decBtnClass: "",
    _value: 0,
    onValueChange: function () {},
    render: function () {
        this.container.title = this.title;
        this.bodyEl = document.createElement("div");
        this.bodyEl.className = this.bodyClass;
        this.textEl = document.createElement("input");
        this.textEl.style.padding = "0 " + this.txtPadding + "px 0 0";
        this.textEl.className = this.txtClass;
        if (this.maxLength > 0) {
            this.textEl.setAttribute("maxLength", this.maxLength)
        }
        this.btnWrapperEl = document.createElement("div");
        this.btnWrapperEl.style.width = this.btnWidth + "px";
        this.btnWrapperEl.style.cssFloat = "right";
        this.incEl = document.createElement("div");
        this.incEl.className = this.incBtnClass;
        this.decEl = document.createElement("div");
        this.decEl.className = this.decBtnClass;
        this.bodyEl.appendChild(this.textEl);
        this.btnWrapperEl.appendChild(this.incEl);
        this.btnWrapperEl.appendChild(this.decEl);
        this.bodyEl.appendChild(this.btnWrapperEl);
        this.container.appendChild(this.bodyEl);
        this.textEl.style.height = this.bodyEl.clientHeight + "px";
        this.textEl.style.width = (this.bodyEl.clientWidth - this.btnWidth) - this.txtPadding + "px";
        var a = Math.round((this.bodyEl.clientHeight / 2));
        this.incEl.style.height = (a - (this.incEl.offsetHeight - this.incEl.clientHeight)) + "px";
        this.decEl.style.height = this.bodyEl.clientHeight - this.incEl.offsetHeight + "px"
    },
    getValue: function () {
        return this.textEl.value
    },
    setValue: function (a) {
        this.textEl.value = a;
        this._value = a;
        this.onValueChange(a)
    },
    changeValue: function (a) {
        if (a.textEl.value < a.minValue || !a.textEl.value) {
            a.setValue(a.minValue)
        } else {
            if (a.textEl.value > a.maxValue) {
                a.setValue(a.maxValue)
            } else {
                a.setValue(parseInt(a.textEl.value, 10))
            }
        }
    },
    incValue: function (a) {
        if (a.textEl.value < a.minValue) {
            a.setValue(a.minValue)
        } else {
            if (a.textEl.value > a.maxValue) {
                a.setValue(a.maxValue)
            } else {
                if (a.textEl.value < a.maxValue) {
                    a.setValue(a._value + 1)
                }
            }
        }
        if (a.trigger) {
            window.onmouseup = function () {
                clearTimeout(a._timeout);
                window.onmouseup = ""
            };
            a._timeout = setTimeout(function () {
                a._incValue(a)
            }, a.clickDelay)
        }
    },
    _incValue: function (a) {
        if (a.textEl.value < a.maxValue) {
            a.setValue(a._value + 1)
        }
        a._timeout = setTimeout(function () {
            a._incValue(a)
        }, a.clickTimeout)
    },
    decValue: function (a) {
        if (a.textEl.value > a.maxValue) {
            a.setValue(a.maxValue)
        } else {
            if (a.textEl.value < a.minValue) {
                a.setValue(a.minValue)
            } else {
                if (a.textEl.value > a.minValue) {
                    a.setValue(a._value - 1)
                }
            }
        }
        if (a.trigger) {
            window.onmouseup = function () {
                clearTimeout(a._timeout);
                window.onmouseup = ""
            };
            a._timeout = setTimeout(function () {
                a._decValue(a)
            }, a.clickDelay)
        }
    },
    _decValue: function (a) {
        if (a.textEl.value > a.minValue) {
            a.setValue(a._value - 1)
        }
        a._timeout = setTimeout(function () {
            a._decValue(a)
        }, a.clickTimeout)
    }
};
K.D.PriorityTask = function () {
    this.eventQueue = []
};
K.D.PriorityTask.prototype = {
    timeout: 0,
    blocked: false,
    blockTime: 40,
    loopTime: 0,
    _timeout: 0,
    _isCleared: true,
    _fn: function () {},
    add: function (a, b) {
      var c = this;
      this._fn = a;
      this._isCleared = false;
      this.executionTime = new Date().getTime() + b;
      this.timeout = b;
      this._timeout = setTimeout(function () {
          //console.log( "loop", a, b );
          c._async()
      }, (b - this.loopTime))
    },
    clear: function () {
        clearTimeout(this._timeout);
        this._isCleared = true;
        this.fire()
    },
    run: function (a) {

        if (this._isCleared) {
          a()
        } else {
          this.blocked = ((this.executionTime - new Date().getTime()) >= (this.timeout - this.blockTime)) ? true : false;
          if (this.blocked) {
            this.eventQueue.push(a)
          } else {
            a()
          }
        }
    },
    _async: function () {
        this._fn();
        this.blocked = false
    },
    fire: function () {
        var a;

        for (a in this.eventQueue) {
            if (this.eventQueue[a]) {
                this.eventQueue[a]()
            }
        }
        this.eventQueue = []
    }
};

function C(a) {
    var b = 0;
    if (a) {
        if (a.src) {
            this.setSrc(a.src)
        }
        if (a.polyphony) {
            b = a.polyphony
        }
    }
    this.init(b)
}
C.prototype = {
    _polyphony: 4,
    _curChannel: 0,
    _src: "",
    _vol: 1, //0.75,
    _muted: false,
    init: function (a) {
        var b;
        if (a) {
            this._polyphony = a
        }
        this._channelArr = [];
        for (b = 0; b < this._polyphony; b++) {
            this._channelArr.push(new Audio())
        }
    },
    setVolume: function (a) {
        var b;
        this._vol = a;
        for (b = 0; b < this._polyphony; b++) {
            this._channelArr[b].volume = a
        }
    },
    getVolume: function () {
        return this._vol
    },
    setMute: function (a) {
        var b;
        this._muted = a;
        for (b = 0; b < this._polyphony; b++) {
            this._channelArr[b].muted = a
        }
    },
    getMute: function () {
        return this._muted
    },
    setSrc: function (a) {
        var b;
        this._src = a;
        for (b = 0; b < this._polyphony; b++) {
            this._channelArr[b].src = a
        }
    },
    getSrc: function () {
        return this._src
    },
    getValidFormats: function () {
        var a = {},
            b = this._channelArr[this._curChannel];
        if (b.canPlayType) {
            a.ogg = (b.canPlayType("audio/ogg") != "no") && (b.canPlayType("audio/ogg") !== "");
            a.mp3 = (b.canPlayType("audio/mpeg") != "no") && (b.canPlayType("audio/mpeg") !== "");
            a.wav = (b.canPlayType("audio/wav") != "no") && (b.canPlayType("audio/wav") !== "");
            return a
        }
        return false
    },
    play: function () {

        //  POPCORN beat updates controls


        this._channelArr[this._curChannel].load();
        this._channelArr[this._curChannel].play();
        this._curChannel++;

        //console.log( Emit.data );
        Emit.sender.trigger("sketchUpdate", Emit.data[ this._curChannel ] );

        if (this._curChannel == this._polyphony) {
            this._curChannel = 0
        }
    }
};

