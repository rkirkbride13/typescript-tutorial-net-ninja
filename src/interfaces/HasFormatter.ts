export interface HasFormatter {
  format(): string;
}

// enforce that a class which uses the HasFormatter interface has got a format method