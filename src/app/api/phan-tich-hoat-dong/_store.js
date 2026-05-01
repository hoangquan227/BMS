export const trackingStore = {
  pageViews: [],
  featureEvents: [],
  taskActivities: [],
};

export function addRecord(collection, payload) {
  const record = {
    id: crypto.randomUUID(),
    thoiDiemGhiNhan: new Date().toISOString(),
    ...payload,
  };

  trackingStore[collection].push(record);
  return record;
}
