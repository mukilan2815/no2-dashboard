import { fromArrayBuffer, GeoTIFF } from 'geotiff';

export interface TiffData {
  data: number[];
  width: number;
  height: number;
  bounds: [number, number, number, number]; // [west, south, east, north]
}

export async function processTiffFile(file: File): Promise<TiffData> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const tiff: GeoTIFF = await fromArrayBuffer(arrayBuffer);
    const image = await tiff.getImage();
    const rasters = await image.readRasters();
    
    const data = Array.from(rasters[0] as Float32Array);
    const [width, height] = [image.getWidth(), image.getHeight()];
    const bbox = image.getBoundingBox();

    return {
      data,
      width,
      height,
      bounds: bbox
    };
  } catch (error) {
    console.error('Error processing TIFF file:', error);
    throw new Error('Failed to process TIFF file');
  }
}