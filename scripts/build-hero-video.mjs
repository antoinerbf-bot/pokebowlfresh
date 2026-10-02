import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const sprite = "src/assets/dish-sprite.webp";
const hero = "src/assets/hero-poke.jpg";
const output = "public/hero-video.mp4";

if (!existsSync(sprite) || !existsSync(hero)) {
  console.log("Hero sources missing; keeping existing hero-video.mp4.");
  process.exit(0);
}

try {
  execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
} catch {
  console.log("FFmpeg is not installed; keeping existing hero-video.mp4.");
  process.exit(0);
}

const filter = [
  // Warm, slow product showcase: no recipe steps and no text in the video.
  "[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,boxblur=18:2,eq=saturation=1.05:brightness=0.03[bg0]",
  "[1:v]crop=iw/3:ih/3:0:ih/3*0,scale=1500:844:force_original_aspect_ratio=decrease[food0]",
  "[2:v]crop=iw/3:ih/3:iw/3*2:0,scale=1500:844:force_original_aspect_ratio=decrease[food1]",
  "[3:v]crop=iw/3:ih/3:iw/3*1:ih/3,scale=1500:844:force_original_aspect_ratio=decrease[food2]",
  "[4:v]crop=iw/3:ih/3:0:ih/3,scale=1500:844:force_original_aspect_ratio=decrease[food3]",
  "[5:v]crop=iw/3:ih/3:iw/3*2:ih/3,scale=1500:844:force_original_aspect_ratio=decrease[food4]",
  "[6:v]crop=iw/3:ih/3:iw/3*1:0,scale=1500:844:force_original_aspect_ratio=decrease[food5]",
  "[bg0][food0]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v0]",
  "[bg0][food1]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v1]",
  "[bg0][food2]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v2]",
  "[bg0][food3]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v3]",
  "[bg0][food4]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v4]",
  "[bg0][food5]overlay=(W-w)/2:(H-h)/2,zoompan=z='min(zoom+0.0007,1.045)':d=53:s=1920x1080:fps=24,trim=duration=2.2,setpts=PTS-STARTPTS[v5]",
  "[v0][v1][v2][v3][v4][v5]concat=n=6:v=1:a=0,format=yuv420p[v]",
].join(";");

execFileSync("ffmpeg", [
  "-y", "-hide_banner", "-loglevel", "error",
  "-loop", "1", "-i", hero,
  "-loop", "1", "-i", sprite,
  "-loop", "1", "-i", sprite,
  "-loop", "1", "-i", sprite,
  "-loop", "1", "-i", sprite,
  "-loop", "1", "-i", sprite,
  "-loop", "1", "-i", sprite,
  "-filter_complex", filter,
  "-map", "[v]",
  "-t", "13.2",
  "-r", "24",
  "-c:v", "libx264",
  "-crf", "23",
  "-preset", "medium",
  "-movflags", "+faststart",
  "-an",
  output,
], { stdio: "inherit" });

console.log("Generated", output);
