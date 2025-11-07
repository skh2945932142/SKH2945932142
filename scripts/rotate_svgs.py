import os
import random

# mapping: base filename -> list of candidate filenames (including base)
MAP = {
    "images/skills.svg": ["images/skills.svg", "images/skills_variant2.svg"],
    "images/terminal_card.svg": [
        "images/terminal_card.svg",
        "images/terminal_card_variant2.svg",
    ],
    "images/card_wave.svg": ["images/card_wave.svg", "images/card_wave_variant2.svg"],
    "images/header.svg": ["images/header.svg"],  # header currently single; keep as is
}

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

changed = False
for out, candidates in MAP.items():
    choice = random.choice(candidates)
    src = os.path.join(REPO_ROOT, choice)
    dst = os.path.join(REPO_ROOT, out)
    if not os.path.exists(src):
        print(f"候选文件不存在: {src}")
        continue
    with open(src, "rb") as f:
        data = f.read()
    # If dst not exists or differs, write
    if not os.path.exists(dst) or open(dst, "rb").read() != data:
        with open(dst, "wb") as f:
            f.write(data)
        print(f"写入: {out} <- {choice}")
        changed = True
    else:
        print(f"未更改: {out} (已与 {choice} 相同)")

# Exit code 0 even if no change; caller (action) should commit if changes
if changed:
    print("Some files changed")
else:
    print("No changes")
