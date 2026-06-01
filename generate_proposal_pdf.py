# -*- coding: utf-8 -*-
"""
Imabox — Netflix Proposal PDF  (v2 — spacious redesign)
Dark premium: black bg, gold accents, clean layout, 2 A4 pages
"""

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

W, H = A4          # 595 x 842 pt
MX   = 18 * mm     # horizontal margin
MY   = 16 * mm     # vertical margin
CW   = W - 2 * MX  # content width

# Palette
BG    = (0.031, 0.031, 0.031)
PANEL = (0.059, 0.059, 0.059)
GOLD  = (0.788, 0.663, 0.431)
WHITE = (0.950, 0.950, 0.950)
MUTED = (0.600, 0.600, 0.600)
DIM   = (0.810, 0.810, 0.810)

OUT = r"C:\Users\User\Documents\GitHub\imabox\Imabox_Proposal_Netflix.pdf"


# ── Low-level helpers ─────────────────────────────────────────────────────────

def bg(cv):
    cv.setFillColorRGB(*BG)
    cv.rect(0, 0, W, H, fill=1, stroke=0)

def rule(cv, x, y, w, alpha=0.13):
    cv.saveState()
    cv.setStrokeColorRGB(1, 1, 1)
    cv.setStrokeAlpha(alpha)
    cv.setLineWidth(0.4)
    cv.line(x, y, x + w, y)
    cv.restoreState()

def dot(cv, x, y):
    cv.setFillColorRGB(*GOLD)
    cv.circle(x, y, 2, fill=1, stroke=0)

def txt(cv, x, y, s, font="Helvetica", size=8, color=WHITE, align="left"):
    cv.setFont(font, size)
    cv.setFillColorRGB(*color)
    if align == "right":
        cv.drawRightString(x, y, s)
    elif align == "center":
        cv.drawCentredString(x, y, s)
    else:
        cv.drawString(x, y, s)

def spaced(s):
    """Light manual letter-spacing for labels."""
    return "  ".join(s.upper())

def wrap(cv, x, y, text, font="Helvetica", size=8, color=DIM, max_w=None, lead=12):
    """Word-wrap text block. Returns total height consumed."""
    if max_w is None:
        max_w = CW
    cv.setFont(font, size)
    cv.setFillColorRGB(*color)
    words = text.split()
    lines, cur = [], ""
    for w in words:
        probe = (cur + " " + w).strip()
        if cv.stringWidth(probe, font, size) <= max_w:
            cur = probe
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    for i, l in enumerate(lines):
        cv.drawString(x, y - i * lead, l)
    return len(lines) * lead


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 1  — Cover + Concept + Methodology
# ══════════════════════════════════════════════════════════════════════════════
def page1(cv):
    bg(cv)
    y = H - MY - 4*mm          # cursor (top of content)

    # ── HEADER ────────────────────────────────────────────────────────────────
    # Logo
    cv.setFont("Helvetica-Bold", 24)
    cv.setFillColorRGB(*WHITE)
    cv.drawString(MX, y, "imabox")
    lw = cv.stringWidth("imabox", "Helvetica-Bold", 24)
    cv.setFillColorRGB(*GOLD)
    cv.drawString(MX + lw, y, ".")

    # Contact (right)
    for i, line in enumerate(["hello@imabox.uy", "+598 98 325 902", "imabox.uy"]):
        txt(cv, W - MX, y - i * 10, line, size=7.5, color=MUTED, align="right")

    y -= 20
    rule(cv, MX, y, CW)
    y -= 18

    # ── DOC TAG + TITLE ───────────────────────────────────────────────────────
    txt(cv, MX, y, spaced("Proposal"), font="Helvetica-Bold", size=7, color=GOLD)
    y -= 16

    txt(cv, MX, y, "Architectural Video", font="Helvetica-Bold", size=22, color=WHITE)
    y -= 14

    txt(cv, MX, y, "3D Animation  ·  60 seconds  ·  4K  ·  Premium tier",
        size=8.5, color=MUTED)
    y -= 24

    # ── META PANEL ────────────────────────────────────────────────────────────
    panel_h = 32 * mm
    panel_y = y - panel_h

    cv.saveState()
    cv.setFillColorRGB(*PANEL)
    cv.roundRect(MX, panel_y, CW, panel_h, 6, fill=1, stroke=0)
    cv.setStrokeColorRGB(1, 1, 1)
    cv.setStrokeAlpha(0.10)
    cv.setLineWidth(0.5)
    cv.roundRect(MX, panel_y, CW, panel_h, 6, fill=0, stroke=1)
    cv.restoreState()

    half   = CW / 2
    pad    = 6 * mm
    row_h2 = panel_h / 2
    meta   = [
        [("CLIENT",    "Netflix"),                        ("PROJECT", "Los Gatos Building — California, USA")],
        [("DATE",      "06 / 01 / 2026"),                ("VALID FOR", "30 days")],
    ]
    for r, row in enumerate(meta):
        for c, (lbl, val) in enumerate(row):
            mx2 = MX + pad + c * half
            my2 = y - pad - r * row_h2
            txt(cv, mx2, my2, spaced(lbl), font="Helvetica-Bold", size=6.5, color=GOLD)
            txt(cv, mx2, my2 - 11, val, size=8.5, color=WHITE)

    y = panel_y - 22

    # ── THE CONCEPT ───────────────────────────────────────────────────────────
    txt(cv, MX, y, spaced("The Concept"), font="Helvetica-Bold", size=7, color=GOLD)
    y -= 14

    concept = (
        "A ~60-second video in which the current state of the site transforms before the viewer "
        "into the finished project. We start from real footage of the location, render the project "
        "frame by frame matched to the exact camera perspective (camera matching), enhance that render "
        "with AI post-production for hyper-realistic integration, and blend it into the real footage "
        "through generative transitions. The building is rendered faithfully to the plans — not "
        "hallucinated by AI —; AI elevates the realism and merges project and reality into a single living shot."
    )
    used = wrap(cv, MX, y, concept, size=8.5, color=DIM, max_w=CW, lead=13)
    y -= used + 20

    # ── METHODOLOGY ───────────────────────────────────────────────────────────
    txt(cv, MX, y, spaced("Methodology"), font="Helvetica-Bold", size=7, color=GOLD)
    y -= 16

    col1_w = 50 * mm
    col2_x = MX + col1_w + 6 * mm
    col2_w = CW - col1_w - 6 * mm

    steps = [
        ("1 · Anchoring in reality",
         "Key-frame extraction from the site video to lock perspective, lens and lighting for each segment."),
        ("2 · Project render",
         "The project rendered frame by frame, aligned to the real camera (camera matching), faithful to the plans."),
        ("3 · AI post-production",
         "Photorealistic integration of the render — shadows, reflections, atmosphere — blended with real footage texture."),
        ("4 · Blend with reality",
         "Generative transitions synthesizing in-between frames: the existing site transforms into the project seamlessly."),
        ("5 · Final finishing",
         "Assembly, unified color grading, 4K upscaling, temporal coherence and sound design + music."),
    ]

    for name, detail in steps:
        txt(cv, MX, y, name, font="Helvetica-Bold", size=8, color=WHITE)
        used = wrap(cv, col2_x, y, detail, size=8, color=MUTED, max_w=col2_w, lead=12)
        row_h = max(12, used) + 10
        rule(cv, MX, y - row_h + 4, CW)
        y -= row_h

    # ── FOOTER ────────────────────────────────────────────────────────────────
    rule(cv, MX, MY + 14, CW)
    txt(cv, MX,      MY + 5, "imabox.  —  Creative agency for real estate developers",
        size=7, color=MUTED)
    txt(cv, W - MX,  MY + 5, "hello@imabox.uy  ·  imabox.uy",
        size=7, color=MUTED, align="right")
    txt(cv, W / 2,   MY - 4, "1 / 2", size=6, color=MUTED, align="center")


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 2  — Budget + Terms
# ══════════════════════════════════════════════════════════════════════════════
def page2(cv):
    bg(cv)
    y = H - MY - 4*mm

    # ── MINI HEADER ───────────────────────────────────────────────────────────
    cv.setFont("Helvetica-Bold", 15)
    cv.setFillColorRGB(*WHITE)
    cv.drawString(MX, y, "imabox")
    lw = cv.stringWidth("imabox", "Helvetica-Bold", 15)
    cv.setFillColorRGB(*GOLD)
    cv.drawString(MX + lw, y, ".")

    txt(cv, W - MX, y, "Architectural Video Proposal  ·  Netflix",
        size=7.5, color=MUTED, align="right")
    y -= 14
    rule(cv, MX, y, CW)
    y -= 22

    # ── SCOPE & BUDGET ────────────────────────────────────────────────────────
    txt(cv, MX, y, spaced("Scope & Budget"), font="Helvetica-Bold", size=7, color=GOLD)
    y -= 16

    # Table columns
    c_item   = MX
    c_detail = MX + 44 * mm
    c_price  = W - MX
    d_w      = c_price - c_detail - 22 * mm

    # Table header
    txt(cv, c_item,   y, "I T E M",   font="Helvetica-Bold", size=7, color=MUTED)
    txt(cv, c_detail, y, "D E T A I L", font="Helvetica-Bold", size=7, color=MUTED)
    txt(cv, c_price,  y, "U S D",     font="Helvetica-Bold", size=7, color=MUTED, align="right")
    y -= 9
    rule(cv, MX, y, CW)
    y -= 4

    budget = [
        ("Pre-production",
         "Script, storyboard and definition of the camera move and transformation points",
         "$700"),
        ("Camera matching",
         "Key-frame extraction and alignment of the virtual camera with the real footage",
         "$1,200"),
        ("Project render",
         "The project rendered frame by frame, faithful to the 2D plans",
         "$2,200"),
        ("AI post-production",
         "Photorealistic integration of the render and blending with the real footage texture",
         "$1,400"),
        ("AI blend & transition",
         "Generative transitions: synthesis of in-between frames from reality to project",
         "$1,900"),
        ("4K render & coherence",
         "~60 seconds, 4K upscaling and temporal coherence stabilization",
         "$1,100"),
        ("Final finishing",
         "Unified color grading, sound design and licensed music",
         "$1,200"),
    ]

    for item, detail, price in budget:
        row_top = y
        txt(cv, c_item, row_top, item, font="Helvetica-Bold", size=8, color=WHITE)
        used = wrap(cv, c_detail, row_top, detail, size=7.8, color=MUTED, max_w=d_w, lead=11)
        txt(cv, c_price, row_top, price, size=8, color=WHITE, align="right")
        row_h = max(11, used) + 10
        rule(cv, MX, row_top - row_h + 4, CW)
        y -= row_h

    y -= 4
    # Total row
    txt(cv, c_item, y, "Total", font="Helvetica-Bold", size=12, color=WHITE)
    txt(cv, c_item + 38, y - 1.5, "·  2 revision rounds included", size=7.5, color=MUTED)
    txt(cv, c_price, y, "$9,700", font="Helvetica-Bold", size=16, color=GOLD, align="right")
    y -= 28

    # ── TERMS ─────────────────────────────────────────────────────────────────
    txt(cv, MX, y, spaced("Terms"), font="Helvetica-Bold", size=7, color=GOLD)
    y -= 16

    terms = [
        ("Confidentiality",
         "All project materials are strictly confidential; NDA available on request. "
         "Once the client publicly releases the video, Imabox may use it for portfolio purposes."),
        ("Ownership",
         "The final video and usage rights transfer to the client upon full payment."),
        ("Payment",    "To be agreed between the parties."),
        ("Timeline",   "4 weeks from delivery of the 2D plans and site video / photos."),
        ("Revisions",  "2 rounds included; scope changes quoted separately."),
        ("Deliverable & currency",
         "One horizontal 4K master (MP4 + ProRes), priced in USD."),
    ]

    half2  = len(terms) // 2 + len(terms) % 2
    c2x    = MX + CW / 2 + 5 * mm
    tw     = CW / 2 - 7 * mm
    left_y = y
    rght_y = y

    for i, (title, text) in enumerate(terms):
        if i < half2:
            tx, ref = MX, left_y
        else:
            tx, ref = c2x, rght_y

        dot(cv, tx + 2.5, ref - 3.5)
        txt(cv, tx + 10, ref, title + ":", font="Helvetica-Bold", size=8, color=WHITE)
        used = wrap(cv, tx + 10, ref - 12, text, size=7.8, color=DIM, max_w=tw, lead=11)
        row_h = 12 + used + 8

        if i < half2:
            left_y -= row_h
        else:
            rght_y -= row_h

    y = min(left_y, rght_y) - 16

    # ── VALIDITY ──────────────────────────────────────────────────────────────
    txt(cv, MX, y,
        "This proposal is valid for 30 days from the date of issue. "
        "Amounts do not include taxes applicable per jurisdiction.",
        font="Helvetica-Oblique", size=7, color=MUTED)
    y -= 28

    # ── SIGNATURE LINES ───────────────────────────────────────────────────────
    sig_w = 60 * mm
    sig_y = MY + 28 * mm
    rule(cv, MX, sig_y, sig_w, alpha=0.25)
    txt(cv, MX, sig_y - 10, "Authorized signature — Imabox", size=7, color=MUTED)

    rule(cv, W - MX - sig_w, sig_y, sig_w, alpha=0.25)
    txt(cv, W - MX - sig_w, sig_y - 10, "Authorized signature — Netflix", size=7, color=MUTED)

    # ── FOOTER ────────────────────────────────────────────────────────────────
    rule(cv, MX, MY + 14, CW)
    txt(cv, MX,     MY + 5, "imabox.  —  Creative agency for real estate developers",
        size=7, color=MUTED)
    txt(cv, W - MX, MY + 5, "hello@imabox.uy  ·  imabox.uy",
        size=7, color=MUTED, align="right")
    txt(cv, W / 2,  MY - 4, "2 / 2", size=6, color=MUTED, align="center")


# ══════════════════════════════════════════════════════════════════════════════
def build():
    cv = canvas.Canvas(OUT, pagesize=A4)
    cv.setTitle("Architectural Video Proposal — Netflix | Imabox")
    cv.setAuthor("Imabox")
    page1(cv)
    cv.showPage()
    page2(cv)
    cv.save()
    print(f"PDF saved: {OUT}")

if __name__ == "__main__":
    build()
