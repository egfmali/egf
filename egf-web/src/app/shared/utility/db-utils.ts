
export function convertSnaps<T>(snaps) {
  return <T[]>snaps.map(snap => {
    return <T> {
      ref: snap.payload.doc.ref,
      uid: snap.payload.doc.id,
      ...snap.payload.doc.data()
    };
  });
}