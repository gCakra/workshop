# ⚡ LazyVim Cheatsheet
> Catatan lengkap untuk coding lebih cepat · Leader = `Space` · Local leader = `\`

---

## ⌨️ Mode

| Tombol | Aksi |
|--------|------|
| `Esc` / `<C-[>` | Kembali ke Normal mode |
| `i` | Insert mode (sebelum kursor) |
| `a` | Insert mode (setelah kursor) |
| `I` | Insert di awal baris |
| `A` | Insert di akhir baris |
| `o` | Baris baru di bawah + Insert |
| `O` | Baris baru di atas + Insert |
| `v` | Visual mode (karakter) |
| `V` | Visual mode (baris) |
| `<C-v>` | Visual Block mode |
| `:` | Command mode |

---

## 🧭 Gerakan Dasar

| Tombol | Aksi |
|--------|------|
| `h j k l` | ← ↓ ↑ → |
| `w` / `b` | Maju / mundur satu kata |
| `W` / `B` | Maju / mundur satu KATA (abaikan tanda baca) |
| `e` / `E` | Akhir kata / KATA berikutnya |
| `0` | Awal baris |
| `^` | Karakter pertama baris (non-spasi) |
| `$` | Akhir baris |
| `gg` | Baris pertama file |
| `G` | Baris terakhir file |
| `nG` / `:n` | Pergi ke baris n |
| `%` | Lompat ke bracket pasangan |
| `{` / `}` | Paragraf sebelumnya / berikutnya |
| `<C-d>` / `<C-u>` | Scroll ½ layar ke bawah / atas |
| `<C-f>` / `<C-b>` | Scroll 1 layar ke bawah / atas |
| `zz` / `zt` / `zb` | Center / top / bottom kursor di layar |

---

## ✂️ Edit Dasar

| Tombol | Aksi |
|--------|------|
| `x` | Hapus karakter di kursor |
| `dd` | Hapus (cut) satu baris |
| `yy` | Copy (yank) satu baris |
| `p` / `P` | Paste setelah / sebelum kursor |
| `u` | Undo |
| `<C-r>` | Redo |
| `.` | Ulangi perintah terakhir |
| `r` | Replace satu karakter |
| `R` | Replace mode (overwrite) |
| `~` | Toggle huruf besar/kecil |
| `J` | Gabungkan baris bawah ke baris ini |
| `<C-a>` / `<C-x>` | Increment / decrement angka |

---

## 🎯 Operator + Motion

> Pola: `[operator][count][motion]` — contoh: `d2w`, `c3j`, `y$`

| Operator | Aksi |
|----------|------|
| `d{motion}` | Delete — `d2w`, `d$`, `dip`, `dib` |
| `c{motion}` | Change (delete + insert) — `ciw`, `ci"` |
| `y{motion}` | Yank (copy) — `yiw`, `y2j` |
| `>{motion}` | Indent — `>>`, `>ip` |
| `<{motion}` | Unindent — `<<`, `<ip` |
| `={motion}` | Auto-indent — `==`, `=ip` |
| `gU{motion}` | Uppercase — `gUiw` |
| `gu{motion}` | Lowercase — `guiw` |

### Text Objects

| Tombol | Aksi |
|--------|------|
| `iw` / `aw` | inner word / a word (+ spasi) |
| `is` / `as` | inner sentence / a sentence |
| `ip` / `ap` | inner paragraph / a paragraph |
| `i"` / `a"` | inner / outer double quotes |
| `i'` / `a'` | inner / outer single quotes |
| `` i` `` / `` a` `` | inner / outer backtick |
| `i(` / `a(` | inner / outer parentheses |
| `i{` / `a{` | inner / outer curly braces |
| `i[` / `a[` | inner / outer square brackets |
| `it` / `at` | inner / outer HTML tag |

---

## 🔎 Search & Jump

| Tombol | Aksi |
|--------|------|
| `f{char}` | Lompat ke karakter di baris (forward) |
| `F{char}` | Lompat ke karakter di baris (backward) |
| `t{char}` | Lompat sebelum karakter (forward) |
| `T{char}` | Lompat sebelum karakter (backward) |
| `;` / `,` | Ulangi f/t maju / mundur |
| `/{pattern}` | Cari ke depan |
| `?{pattern}` | Cari ke belakang |
| `n` / `N` | Hasil berikutnya / sebelumnya |
| `*` / `#` | Cari kata di kursor (maju / mundur) |
| `''` | Balik ke posisi sebelumnya |

---

## 🚀 LazyVim — Leader (`<Space>`)

### General

| Tombol | Aksi |
|--------|------|
| `<Space><Space>` | Find file (recent) |
| `<Space>,` | Switch buffer |
| `<Space>/` | Grep di project |
| `<Space>:` | Command history |
| `<Space>e` | Toggle Explorer (Neo-tree) |
| `<Space>E` | Explorer float |
| `<Space>-` | Split horizontal |
| `<Space>\|` | Split vertikal |
| `<Space>qq` | Quit all |

### File (`<Space>f`)

| Tombol | Aksi |
|--------|------|
| `<Space>ff` | Find file |
| `<Space>fr` | Recent files |
| `<Space>fn` | New file |
| `<Space>fs` | Save file |
| `<Space>fS` | Save all files |
| `<Space>fc` | Find config file |
| `<Space>ft` | Terminal (root) |
| `<Space>fT` | Terminal (cwd) |

### Buffer (`<Space>b`)

| Tombol | Aksi |
|--------|------|
| `<Space>bb` | Switch buffer |
| `<Space>bd` | Delete buffer |
| `<Space>bD` | Delete buffer + window |
| `<Space>bl` | Delete buffers ke kiri |
| `<Space>br` | Delete buffers ke kanan |
| `<Space>bo` | Delete buffer lain (only this) |
| `[b` / `]b` | Buffer sebelum / berikutnya |

### Window (`<Space>w`)

| Tombol | Aksi |
|--------|------|
| `<Space>ww` | Window lain |
| `<Space>wd` | Tutup window |
| `<Space>w-` | Split horizontal |
| `<Space>w\|` | Split vertikal |
| `<C-h/j/k/l>` | Navigasi antar window |
| `<C-Up/Down>` | Resize window |

---

## 💻 Code & LSP

### LSP Actions (`<Space>c`)

| Tombol | Aksi |
|--------|------|
| `<Space>ca` | Code action |
| `<Space>cr` | Rename symbol |
| `<Space>cR` | Rename file |
| `<Space>cf` | Format file / range |
| `<Space>cd` | Line diagnostics |
| `<Space>cl` | LSP info |
| `<Space>cm` | Mason (LSP installer) |

### Go To (`g...`)

| Tombol | Aksi |
|--------|------|
| `gd` | Go to definition |
| `gD` | Go to declaration |
| `gr` | References |
| `gI` | Go to implementation |
| `gy` | Go to type definition |
| `K` | Hover docs (tekan 2x untuk masuk) |
| `gK` | Signature help |

### Diagnostics (`<Space>x`)

| Tombol | Aksi |
|--------|------|
| `<Space>xx` | Trouble toggle |
| `<Space>xX` | Buffer diagnostics |
| `<Space>xL` | Location list |
| `<Space>xQ` | Quickfix list |
| `]d` / `[d` | Diagnostic berikutnya / sebelumnya |
| `]e` / `[e` | Error berikutnya / sebelumnya |
| `]w` / `[w` | Warning berikutnya / sebelumnya |

### Completion (Insert Mode)

| Tombol | Aksi |
|--------|------|
| `<C-Space>` | Trigger completion |
| `<C-n>` / `<C-p>` | Item berikutnya / sebelumnya |
| `<Tab>` / `<S-Tab>` | Snippet: lompat field berikutnya / sebelumnya |
| `<CR>` | Confirm pilihan |
| `<C-e>` | Tutup completion |
| `<C-b>` / `<C-f>` | Scroll docs atas / bawah |

---

## 🔍 Search & Git

### Telescope (`<Space>s`)

| Tombol | Aksi |
|--------|------|
| `<Space>ss` | Goto symbol (treesitter) |
| `<Space>sS` | Goto symbol (workspace) |
| `<Space>sg` | Live grep |
| `<Space>sG` | Grep cursor word |
| `<Space>sw` | Cari kata di bawah kursor |
| `<Space>sb` | Grep di buffer |
| `<Space>sd` | Document diagnostics |
| `<Space>sh` | Help pages |
| `<Space>sk` | Keymaps |
| `<Space>sm` | Jump to mark |
| `<Space>sq` | Quickfix list |

### Git (`<Space>g`)

| Tombol | Aksi |
|--------|------|
| `<Space>gg` | Lazygit (root) |
| `<Space>gG` | Lazygit (cwd) |
| `<Space>gb` | Git blame line |
| `<Space>gB` | Git browse |
| `<Space>gf` | Lazygit current file log |
| `<Space>gl` | Lazygit log |
| `]h` / `[h` | Hunk berikutnya / sebelumnya |
| `<Space>ghs` | Stage hunk |
| `<Space>ghr` | Reset hunk |
| `<Space>ghp` | Preview hunk inline |
| `<Space>ghb` | Blame line |

---

## 🎨 UI & Tools

### Toggle (`<Space>u`)

| Tombol | Aksi |
|--------|------|
| `<Space>uf` | Toggle format on save |
| `<Space>ul` | Toggle line numbers |
| `<Space>uL` | Toggle relative numbers |
| `<Space>uw` | Toggle word wrap |
| `<Space>us` | Toggle spelling |
| `<Space>ub` | Toggle background dark/light |
| `<Space>ud` | Toggle diagnostics |
| `<Space>uh` | Toggle inlay hints |
| `<Space>uz` | Toggle Zen mode |
| `<Space>uZ` | Toggle Zoom (maximize window) |

### Terminal

| Tombol | Aksi |
|--------|------|
| `<C-/>` | Toggle terminal float |
| `<C-_>` | Hide terminal (dari dalam terminal) |

### Fold

| Tombol | Aksi |
|--------|------|
| `za` / `zA` | Toggle fold / semua fold |
| `zo` / `zc` | Open / close fold |
| `zR` | Buka semua fold |
| `zM` | Tutup semua fold |

### Marks

| Tombol | Aksi |
|--------|------|
| `m{a-z}` | Set mark lokal |
| `m{A-Z}` | Set mark global |
| `` `{mark} `` | Jump ke mark (exact position) |
| `'{mark}` | Jump ke baris mark |
| `:marks` | List semua marks |

### Macro

| Tombol | Aksi |
|--------|------|
| `q{a-z}` | Rekam macro ke register |
| `q` | Stop rekam |
| `@{a-z}` | Jalankan macro |
| `@@` | Ulangi macro terakhir |
| `n@{a-z}` | Jalankan macro n kali |

---

## ⚡ Flash Plugin (Jump Super Cepat)

| Tombol | Aksi |
|--------|------|
| `s` | Flash: ketik 2 karakter → lompat langsung |
| `S` | Flash treesitter: select node |
| `r` | Flash remote (operator + flash) |
| `R` | Flash treesitter remote |
| `<C-s>` | Toggle flash di search mode |

> 💡 `s` adalah shortcut paling menghemat waktu di LazyVim — ketik 2 huruf dari kata tujuan, semua kemungkinan diberi label, lompat langsung!

---

## 🔥 Combo Cepat (Wajib Hafal)

| Combo | Aksi |
|-------|------|
| `ciw` | Ganti kata di bawah kursor langsung |
| `ci"` | Ganti isi dalam tanda kutip |
| `di(` | Hapus isi dalam kurung |
| `yiw` + `viwp` | Copy kata, paste ke kata lain |
| `vip` + `>` | Select paragraf dan indent |
| `:%s/foo/bar/g` | Ganti semua 'foo' → 'bar' di file |
| `:s/foo/bar/gc` | Ganti dengan konfirmasi satu-satu |
| `"+y` / `"+p` | Copy / paste ke clipboard sistem |
| `gv` | Ulangi visual selection terakhir |
| `<C-v>jjjI` | Multi-line insert (Visual Block) |

---

## 📐 Visual Block (Multi-cursor Style)

1. `<C-v>` — masuk Visual Block
2. `jjj` — select beberapa baris
3. `I` / `A` — insert di awal / akhir semua baris
4. Tulis teks
5. `Esc` — apply ke semua baris

---

## 🧠 Tips Pola Berpikir Vim

```
[operator] [count] [motion/text-object]

Contoh:
  d2w     → delete 2 kata ke depan
  c3j     → change 3 baris ke bawah
  y$      → yank dari kursor ke akhir baris
  >ip     → indent paragraf ini
  gUiw    → uppercase kata ini
  =G      → auto-indent dari sini sampai akhir file
```

> Kuasai pola ini → semua kombinasi jadi masuk akal sendiri.

---

*LazyVim · https://www.lazyvim.org*
