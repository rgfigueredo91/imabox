import subprocess, os, sys
from pathlib import Path

FFMPEG = r"C:\Users\rfigueredo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
OUT = Path(r"C:\Users\rfigueredo\Documents\GitHub\imabox\compiled")
SRC = Path(r"G:\Mi unidad\IMABOX\REDES\INSTAGRAM 2026 CONTENIDO")
OUT.mkdir(exist_ok=True)

ENCODE = ['-c:v', 'libx264', '-crf', '22', '-preset', 'fast', '-pix_fmt', 'yuv420p', '-an']

def vf_fit(w, h):
    return f"scale={w}:{h}:force_original_aspect_ratio=decrease,pad={w}:{h}:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1,fps=25"

VF_REEL  = vf_fit(1080, 1920)
VF_SQUARE = vf_fit(1080, 1080)

def ff(*args):
    r = subprocess.run([FFMPEG] + list(args), capture_output=True, text=True)
    if r.returncode != 0:
        print(f"  FFMPEG ERROR:\n{r.stderr[-800:]}")
    return r.returncode == 0

def reel_from_clips(out_name, clips, max_dur=18, vf=VF_REEL):
    out = str(OUT / out_name)
    n = len(clips)
    args = ['-y']
    for c in clips:
        args += ['-i', str(c)]
    fp = ''.join(f'[{i}:v]{vf}[v{i}];' for i in range(n))
    fp += ''.join(f'[v{i}]' for i in range(n)) + f'concat=n={n}:v=1:a=0[out]'
    args += ['-filter_complex', fp, '-map', '[out]', '-t', str(max_dur)] + ENCODE + [out]
    ok = ff(*args)
    print(f"  {'OK' if ok else 'FAIL'} {out_name}")
    return ok

def reel_trim(out_name, clip, start=0, dur=15, vf=VF_REEL):
    out = str(OUT / out_name)
    args = ['-y', '-ss', str(start), '-i', str(clip), '-t', str(dur),
            '-vf', vf] + ENCODE + [out]
    ok = ff(*args)
    print(f"  {'OK' if ok else 'FAIL'} {out_name}")
    return ok

def reel_loop(out_name, clip, dur=15, vf=VF_REEL):
    out = str(OUT / out_name)
    args = ['-y', '-stream_loop', '-1', '-i', str(clip), '-t', str(dur),
            '-vf', vf] + ENCODE + [out]
    ok = ff(*args)
    print(f"  {'OK' if ok else 'FAIL'} {out_name}")
    return ok

def slideshow(out_name, images, dur_each=3.5, vf=VF_SQUARE):
    out = str(OUT / out_name)
    n = len(images)
    args = ['-y']
    for img in images:
        args += ['-loop', '1', '-t', str(dur_each), '-i', str(img)]
    fp = ''.join(f'[{i}:v]{vf}[v{i}];' for i in range(n))
    fp += ''.join(f'[v{i}]' for i in range(n)) + f'concat=n={n}:v=1:a=0[out]'
    args += ['-filter_complex', fp, '-map', '[out]'] + ENCODE + [out]
    ok = ff(*args)
    print(f"  {'OK' if ok else 'FAIL'} {out_name}")
    return ok

# Source directories
LV  = SRC / "VIDEOS" / "LINK"
KV  = SRC / "VIDEOS" / "KIU 8 de octubre"
TV  = SRC / "VIDEOS" / "Trenes"
V87 = SRC / "VIDEOS" / "1987"
KI  = SRC / "IMAGENES" / "KIU Av Italia"
LI  = SRC / "IMAGENES" / "LINK"
CI  = SRC / "IMAGENES" / "Cala del Yacht"
AI  = SRC / "IMAGENES" / "1987"
T   = SRC / "TEXTOS"
S   = SRC / "SERVICIOS"

print("=== COMPILANDO REELS ===\n")

# Post 01 — LINK nocturno (Peatonal + Hall = 16s)
reel_from_clips("post01_reel.mp4", [
    LV / "Peatonal Acceso Nocturna.mp4",
    LV / "Hall Acceso 01.mp4"
], max_dur=16)

# Post 03 — KIU animado (trim 15s)
reel_trim("post03_reel.mp4", KV / "instagram 01.mp4", dur=15)

# Post 05 — LINK Aérea (Aerea01 + Aerea02A = 16s)
reel_from_clips("post05_reel.mp4", [
    LV / "Aerea Diurna Ajustada 01.mp4",
    LV / "Aerea Diurna Ajustada 02A.mp4"
], max_dur=16)

# Post 10 — 1987 IA loop (6s clip × loop = 15s)
reel_loop("post10_reel.mp4", V87 / "magnific_cinematic-shot-arch-viz-a_2947880266.mp4", dur=15)

# Post 12 — Virtual Showroom (trim 20s desde el inicio)
reel_trim("post12_reel.mp4",
    S / "Virtual Showroom _ Imabox - Google Chrome 2026-05-09 13-40-54.mp4",
    dur=20)

# Post 14 — Trenes concat (4+4+4+6 = 18s)
reel_from_clips("post14_reel.mp4", [
    TV / "magnific_arch-viz-animation-train-_2952112655.mp4",
    TV / "magnific_cinematic-shot-arch-viz-a_2952060863.mp4",
    TV / "magnific_cinematic-shot-arch-viz-a_2952061807.mp4",
    TV / "magnific_construction-timelaps-sta_2952059503.mp4"
], max_dur=18)

# Post 16 — KIU final (trim 20s)
reel_trim("post16_reel.mp4", KV / "instagram 02 final.mp4", dur=20)

# Post 18 — LINK Rooftop + Aérea02B (8+8=16s)
reel_from_clips("post18_reel.mp4", [
    LV / "Rooftop Exterior.mp4",
    LV / "Aerea Diurna Ajustada 02B.mp4"
], max_dur=16)

print("\n=== COMPILANDO SLIDESHOWS ===\n")

# Post 04 — KIU 4 ángulos exteriores
slideshow("post04_slideshow.mp4", [
    KI / "2025-12-19_Semi aerea.jpg",
    KI / "2025-12-19_Exterior Esquina.jpg",
    KI / "2025-12-19_Acceso.jpg",
    KI / "2025-12-19_Skybar.jpg"
], dur_each=3.5)

# Post 08 — Cala del Yacht 4 vistas
slideshow("post08_slideshow.mp4", [
    CI / "2025-03-18_Desde lago atardecer - Gris Oscuro.jpg",
    CI / "2025-03-18_desde lago 5 torres gris oscuro.jpg",
    CI / "2025-03-11_Esquina Comercial NOCTURNO 5 torres.jpg",
    CI / "2025-03-18_Paseo Comercial-Gris Oscuro.jpg"
], dur_each=3.5)

# Post 09 — Textos educativos 6 slides
slideshow("post09_slideshow.mp4", [
    T / "slide-01.png",
    T / "slide-02.png",
    T / "slide-03.png",
    T / "slide-04.png",
    T / "slide-05.png",
    T / "slide-06.png"
], dur_each=3.0)

# Post 11 — KIU amenities (Skybar, Cowork, Barbacoa)
slideshow("post11_slideshow.mp4", [
    KI / "2025-12-19_Skybar.jpg",
    KI / "2025-12-19_Cowork.jpg",
    KI / "2025-12-19_Barbacoa.jpg"
], dur_each=4.5)

# Post 13 — Servicios highlights x6
slideshow("post13_slideshow.mp4", [
    S / "highlight-01.png",
    S / "highlight-02.png",
    S / "highlight-03.png",
    S / "highlight-04.png",
    S / "highlight-05.png",
    S / "highlight-06.png"
], dur_each=3.0)

# Post 15 — LINK interior (lobby, multiuso, mall)
slideshow("post15_slideshow.mp4", [
    LI / "2025-11-01 lobby n7.jpg",
    LI / "2025-10-31_1310_Multiuso.jpg",
    LI / "2025-11-05_1310_Mall Comercial sin monos.jpg"
], dur_each=5.0)

# Post 17 — 1987 tipologías
slideshow("post17_slideshow.mp4", [
    AI / "2025-15-09 monoambientes final.jpg",
    AI / "2025-15-09 terraza final.jpg",
    AI / "2025-15-09 planta baja final.jpg",
    AI / "2024-10-28_Lito interior.jpg"
], dur_each=3.5)

# Post 19 — KIU interiores x5
slideshow("post19_slideshow.mp4", [
    KI / "2025-12-19_Living comedor cocina piso  5.jpg",
    KI / "2025-12-19_Living comedor cocina piso  6.jpg",
    KI / "2025-12-19_Living piso  6.jpg",
    KI / "2025-12-19_Dormitorio n05.jpg",
    KI / "2025-12-19_Dormitorio n11.jpg"
], dur_each=3.0)

print("\n=== ARCHIVOS GENERADOS ===\n")
total = 0
for f in sorted(OUT.iterdir()):
    if f.suffix == '.mp4':
        mb = f.stat().st_size / 1024 / 1024
        total += mb
        print(f"  {f.name:45s}  {mb:.1f} MB")
print(f"\n  Total: {total:.0f} MB")
