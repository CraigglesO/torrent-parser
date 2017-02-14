import * as test from "blue-tape";
import * as fs   from "fs";
import { decodeTorrentFile, decodeTorrent, encodeTorrent } from "../torrent-parser";

const parseTorrent = require("parse-torrent");

test("parse Torrent from File", (t) => {
  t.plan(17);

  let file             = fs.readFileSync("./screen.torrent");
  let parsedTorrent    = decodeTorrentFile("./screen.torrent");
  let devParsedTorrent = parseTorrent(file);

  t.equal( parsedTorrent.info.toString(), devParsedTorrent.info.toString(), "Same info" );
  t.equal( parsedTorrent.infoBuffer.toString(), devParsedTorrent.infoBuffer.toString(), "Same infoBuffer" );
  t.equal( parsedTorrent.infoHash, devParsedTorrent.infoHash, "Same infoHash" );
  t.equal( parsedTorrent.infoHashBuffer.toString(), devParsedTorrent.infoHashBuffer.toString(), "Same infoHashBuffer" );
  t.equal( parsedTorrent.name, devParsedTorrent.name, "Same name" );
  t.equal( parsedTorrent.private, devParsedTorrent.private, "Same private" );
  t.equal( parsedTorrent.created.toString(), devParsedTorrent.created.toString(), "Same created" );
  t.equal( parsedTorrent.createdBy, devParsedTorrent.createdBy, "Same createdBy" );
  t.equal( parsedTorrent.announce.toString(), devParsedTorrent.announce.toString(), "Same announce" );
  t.equal( parsedTorrent.urlList.toString(), devParsedTorrent.urlList.toString(), "Same urlList" );
  t.equal( parsedTorrent.files[0].path, devParsedTorrent.files[0].path, "Same info path" );
  t.equal( parsedTorrent.files[0].name, devParsedTorrent.files[0].name, "Same info name" );
  t.equal( parsedTorrent.files[0].length, devParsedTorrent.files[0].length, "Same info length" );
  t.equal( parsedTorrent.files[0].offset, devParsedTorrent.files[0].offset, "Same info offset" );
  t.equal( parsedTorrent.length, devParsedTorrent.length, "Same length" );
  t.equal( parsedTorrent.lastPieceLength, devParsedTorrent.lastPieceLength, "Same lastPieceLength" );
  t.equal( parsedTorrent.pieces.toString(), devParsedTorrent.pieces.toString(), "Same pieces" );

  t.end();
});

test("parse Torrent from File", (t) => {
  t.plan(17);

  let file             = fs.readFileSync("./screen.torrent");
  let parsedTorrent    = decodeTorrent(file);
  let devParsedTorrent = parseTorrent(file);

  t.equal( parsedTorrent.info.toString(), devParsedTorrent.info.toString(), "Same info" );
  t.equal( parsedTorrent.infoBuffer.toString(), devParsedTorrent.infoBuffer.toString(), "Same infoBuffer" );
  t.equal( parsedTorrent.infoHash, devParsedTorrent.infoHash, "Same infoHash" );
  t.equal( parsedTorrent.infoHashBuffer.toString(), devParsedTorrent.infoHashBuffer.toString(), "Same infoHashBuffer" );
  t.equal( parsedTorrent.name, devParsedTorrent.name, "Same name" );
  t.equal( parsedTorrent.private, devParsedTorrent.private, "Same private" );
  t.equal( parsedTorrent.created.toString(), devParsedTorrent.created.toString(), "Same created" );
  t.equal( parsedTorrent.createdBy, devParsedTorrent.createdBy, "Same createdBy" );
  t.equal( parsedTorrent.announce.toString(), devParsedTorrent.announce.toString(), "Same announce" );
  t.equal( parsedTorrent.urlList.toString(), devParsedTorrent.urlList.toString(), "Same urlList" );
  t.equal( parsedTorrent.files[0].path, devParsedTorrent.files[0].path, "Same info path" );
  t.equal( parsedTorrent.files[0].name, devParsedTorrent.files[0].name, "Same info name" );
  t.equal( parsedTorrent.files[0].length, devParsedTorrent.files[0].length, "Same info length" );
  t.equal( parsedTorrent.files[0].offset, devParsedTorrent.files[0].offset, "Same info offset" );
  t.equal( parsedTorrent.length, devParsedTorrent.length, "Same length" );
  t.equal( parsedTorrent.lastPieceLength, devParsedTorrent.lastPieceLength, "Same lastPieceLength" );
  t.equal( parsedTorrent.pieces.toString(), devParsedTorrent.pieces.toString(), "Same pieces" );

  t.end();
});
